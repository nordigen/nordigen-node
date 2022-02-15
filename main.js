import { randomUUID } from 'crypto'
import dotenv from 'dotenv'
import NordigenClient from './nordigen/index.js';

dotenv.config();

// Get secretId and secretKey from ob.nordigen.com portal and pass to NordigenClient or load from .env file
const client = new NordigenClient({
    secretId: process.env.SECRET_ID,
    secretKey: process.env.SECRET_KEY
});

// Generate new access token
const tokenData = await client.generateToken();

// Get access and refresh token
// Note: access_token is automatically injected to other requests after you successfully obtain it
const token = tokenData.access;
const refreshToken = tokenData.refresh;

// Exchange refresh token
const newToken = await client.exchangeToken({refreshToken: refreshToken});

// Use existing token
client.setToken(process.env.TOKEN);

// Get list of institutions
const institutions = await client.institution.getInstitutions({country: "LV"});

// As example we will use Revolut institution id that you can get from getInstitutions response
const institutionId = "REVOLUT_REVOGB21";

// Initialize new bank session
const init = await client.initSession({
    redirectUrl: "https://nordigen.com",
    institutionId: institutionId,
    referenceId: randomUUID()
})

// Get link to authorize in the bank
// Authorize with your bank via this link, to gain access to account data
const link = init.link;
// requisition id is needed to get accountId in the next step
const requisitionId = init.id;

// Get account id after completed authorization with a bank
const requisitionData = await client.requisition.getRequisitionById(requisitionId);
const accountId = requisitionData.accounts[0];

// Create account data instance
const account = client.account(accountId);
// Fetch account metadata
const metadata = await account.getAccountMetadata();
// Fetch account balances
const balances = await account.getBalances();
// Fetch account details
const details = await account.getDetails();
// Fetch account transactions
const transactions = await account.getTransactions();
