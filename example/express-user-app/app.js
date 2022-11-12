import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { randomUUID } from 'crypto';
import NordigenClient from 'nordigen-node';

import {
    getUser,
    createUser,
    createRequisition,
    insertAccountMeta,
    insertAccountData,
    getAccountData
} from './db/query.js';

dotenv.config();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const REDIRECT_URI = `http://localhost:${port}/api/data/`;

const client = new NordigenClient({
    secretId: process.env.SECRET_ID,
    secretKey: process.env.SECRET_KEY
});

app.disable('view cache');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('json', (context) => {
    return JSON.stringify(context);
});

app.set('json spaces', 4);
app.use(
    session({
        secret: randomUUID(),
        resave: true,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        }
    })
);
app.use((req, res, next) => {
    res.locals.userEmail = req.session.userEmail;
    next();
});

app.set('etag', false);
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', async (req, res) => {
    if (req.session.userId) {
        //Get list of institutions
        const institutions = await client.institution.getInstitutions({
            country: process.env.COUNTRY
        });
        return res.render('index', {
            data: JSON.stringify(institutions),
            userEmail: req.session.userEmail
        });
    }

    return res.redirect('/login');
});

app.get('/login', async (req, res) => {
    if (!req.session.userId) {
        return res.render('login');
    }

    return res.redirect('/');
});

// Login routes
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await getUser(email, password);

    if (!user) {
        return res.status(401).send(
            `
                <h3>User with email: ${email} doesn't exists or invalid credential where provided.
                \nTry <a href="/login">login</a> again or create new account <a href="/signup">here</a>
                <h3>
            `
        );
    }

    client.token = user.accessToken;
    req.session.userId = user.id;
    req.session.userEmail = email;
    return res.redirect('/');
});

// Signup routes
app.get('/signup', async (req, res) => {
    if (req.session.userId) {
        return res.redirect('/');
    }
    return res.render('signup');
});

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await getUser(email, password);

    if (user) {
        return res
            .status(409)
            .send(
                `User with email: ${email} already exists. Please <a href="/login">Login</a>`
            );
    }

    const token = await client.generateToken();
    const data = {
        accessToken: token.access,
        ...req.body
    };

    const response = await createUser(data);
    req.session.userId = response[0];
    req.session.userEmail = email;
    return res.redirect('/');
});

app.get('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/agreements/:id', async (req, res) => {
    const institutionId = req.params.id;

    if (!institutionId) {
        res.render('index');
    }

    const init = await client.initSession({
        redirectUrl: REDIRECT_URI,
        institutionId: institutionId,
        referenceId: randomUUID()
    });

    await createRequisition({
        userId: req.session.userId,
        requisitionId: init.id,
        agreementId: init.agreement
    });

    req.session.requisition = init.id;
    req.session.save((err) => {
        if (err) {
            throw new Error(err.message);
        }

        return res.redirect(init.link);
    });
});

app.get('/my-data', async (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
        res.status(403).send(
            '<h2>Please <a href="/login">Login</a> before accessing your data.</h2>'
        );
    }

    const data = await getAccountData(userId);
    const accountData = data[0]?.transactionData;
    return res.render('my-account', {
        data: accountData
            ? JSON.parse(accountData)
            : 'No data to display. Please connect bank account'
    });
});

app.get('/api/data', async (req, res) => {
    const userId = req.session.userId;
    const requisitionId = req.session.requisition;
    if (!requisitionId) {
        res.status(400).send(
            'Requisition ID is not found. Please complete authorization with your bank'
        );
    }

    const requisitionData = await client.requisition.getRequisitionById(
        requisitionId
    );
    const accountId = requisitionData.accounts[0];

    const account = client.account(accountId);
    const accountData = {
        metadata: await account.getMetadata(),
        balances: await account.getBalances(),
        details: await account.getDetails(),
        transactions: await account.getTransactions()
    };

    await insertAccountMeta({
        userId: userId,
        requisitionId: requisitionId,
        accountId: accountId
    });

    await insertAccountData(accountData, userId);
    res.redirect('/my-data');
});

app.listen(port, () => {
    console.info(`Server is running at http://localhost:${port}`);
});
