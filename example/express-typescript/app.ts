import { Request, Response, NextFunction } from 'express';
import express from 'express';
import session from "express-session";
import dotenv from "dotenv";
import hbs from "hbs";
import { randomUUID } from "crypto";
import NordigenClient from "nordigen-node";

dotenv.config();

const app = express();
const port = 3000;

declare module 'express-session' {
  export interface SessionData {
    requisition: string;
  }
}

app.disable('view cache');
app.set('view engine', 'hbs');
hbs.registerHelper('json', (context: unknown) => {
    return JSON.stringify(context);
});

app.set('json spaces', 4);
app.use(session({
    secret: randomUUID(),
    resave: true,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.set('etag', false);
app.use((req: Request, res: Response, next: NextFunction) => {
    res.set('Cache-Control', 'no-store')
    next()
})

const COUNTRY = "LV";
const REDIRECT_URI = "http://localhost:3000/results";

const client = new NordigenClient({
    secretId: process.env.SECRET_ID!,
    secretKey: process.env.SECRET_KEY!
})

// If you have existing token
// client.setToken(process.env.TOKEN);

// create new access token
const data = await client.generateToken();

app.get('/', async (req, res) => {
    //Get list of institutions
    const institutions = await client.institution.getInstitutions({country: COUNTRY});
    res.render('index', {data: JSON.stringify(institutions)});
})


app.get("/agreements/:id", async (req: Request, res: Response) => {

    const institutionId = req.params.id;

    if(!institutionId) {
        res.render('index');
    }

    const init = await client.initSession({
        redirectUrl: REDIRECT_URI,
        institutionId: institutionId,
        referenceId: randomUUID()
    })

    req.session.requisition = init.id
    req.session.save((err) => {

        if(err) {
            throw new Error(err.message);
        }

        return res.redirect(init.link);
    })
})

app.get("/results/", async (req: Request, res: Response) => {
    const requisitionId = req.session.requisition;
    if(!requisitionId) {
        throw new Error("Requisition ID is not found. Please complete authorization with your bank");
    }

    const requisitionData = await client.requisition.getRequisitionById(requisitionId);
    const accountId = requisitionData.accounts[0];

    const account = client.account(accountId);
    const accountData = [{
        "metadata": await account.getMetadata(),
        "balances": await account.getBalances(),
        "details": await account.getDetails(),
        "transactions": await account.getTransactions()
    }]

    res.json(accountData);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
