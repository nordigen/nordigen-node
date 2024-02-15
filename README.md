# Nordigen Node.js Library


This is official Node client library for [GoCardless Bank Account Data](https://gocardless.com/bank-account-data/).

For a full list of endpoints and arguments, see the [docs](https://developer.gocardless.com/bank-account-data/quick-start-guide).

Before starting to use API you will need to create a new secret and get your `SECRET_ID` and `SECRET_KEY` from the [GoCardless Bank Account Data Portal](https://bankaccountdata.gocardless.com/user-secrets/).


## Requirements

* Node >= 12.0


## Installation

Install library via npm:

```
npm install nordigen-node --save
# or
yarn add nordigen-node
```

## Example application

Express example application can be found in `example` directory

## Quickstart


```javascript
// Get secretId and secretKey from bankaccountdata.gocardless.com portal and pass to NordigenClient or load from .env file
const client = new NordigenClient({
    secretId: process.env.SECRET_ID,
    secretKey: process.env.SECRET_KEY
});

// Generate new access token. Token is valid for 24 hours
const tokenData = await client.generateToken();

// Get access and refresh token
// Note: access_token is automatically injected to other requests after you successfully obtain it
const token = tokenData.access;
const refreshToken = tokenData.refresh;

// Exchange refresh token. Refresh token is valid for 30 days
const newToken = await client.exchangeToken({refreshToken: refreshToken});

// Use existing token
client.token = process.env.TOKEN;

// Get list of institutions
const institutions = await client.institution.getInstitutions({country: "LV"});

// Institution id can be gathered from getInstitutions response.
// Example Revolut ID
const institutionId = "REVOLUT_REVOGB21";

// Initialize new bank session
const init = await client.initSession({
    redirectUrl: "https://gocardless.com",
    institutionId: institutionId,
    referenceId: randomUUID()
})

// Get link to authorize in the bank
// Authorize with your bank via this link, to gain access to account data
const link = init.link;
// requisition id is needed to get accountId in the next step
const requisitionId = init.id;
```

After successful authorization with a bank you can fetch your data (details, balances, transactions)

## Fetching account metadata, balances, details and transactions

```javascript
// Get account id after completed authorization with a bank
const requisitionData = await client.requisition.getRequisitionById(requisitionId);
// Get account id from the list
const accountId = requisitionData.accounts[0];

// Instantiate account object
const account = client.account(accountId);

// Fetch account metadata
const metadata = await account.getMetadata();
// Fetch account balances
const balances = await account.getBalances();
// Fetch account details
const details = await account.getDetails();
// Fetch account transactions
const transactions = await account.getTransactions();
// Optional. You can filter transactions by specific date range
await account.getTransactions({dateFrom: "2021-12-01", dateTo: "2022-01-30"});
```


## Build and publish

1. Run `npm run build`
2. Publish library `npm publish`

## Support

For any inquiries please contact support at [bank-account-data-support@gocardless.com](bank-account-data-support@gocardless.com) or create an issue in repository.
