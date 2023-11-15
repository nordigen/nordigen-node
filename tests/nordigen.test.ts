import { randomUUID } from "crypto";
import { it, jest } from "@jest/globals";
import { NordigenClient } from "../src/NordigenClient";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Test Client", () => {
  const client = new NordigenClient({
    secretId: process.env.SECRET_ID!,
    secretKey: process.env.SECRET_KEY!,
  });

  const institution = "REVOLUT_REVOLT21";
  const redirectUrl = "https://gocardless.com";

  it("Creates access token", async () => {
    const response = await client.generateToken();
    expect(response.access).toBeDefined();
  });

  it("Exchange refresh token for access", async () => {
    const token = await client.generateToken();
    const response = await client.exchangeToken({ refreshToken: token?.refresh! });
    expect(response.access).toBeDefined();
  });

  it("Check if session is initialized", async () => {
    const response = await client.initSession({
      redirectUrl: "https://gocardless.com",
      institutionId: institution,
      referenceId: randomUUID(),
    });
    expect(response.link).toBeDefined();
    expect(response.institution_id).toBeDefined();
  });

  it("Get list of institutions", async () => {
    const response = await client.institution.getInstitutions({ country: "LV" });

    expect(response).toContainEqual(
      expect.objectContaining({
        id: institution,
      }),
    );
  });

  it("Get institution by id", async () => {
    const response = await client.institution.getInstitutionById(institution);
    expect(response.id).toBe(institution);
  });

  it("Test agreement", async () => {
    const newAgreement = await client.agreement.createAgreement({
      institutionId: institution,
    });
    const agreementId = newAgreement.id;
    expect(newAgreement.institution_id).toBe(institution);

    // Get agreement by id
    const agreement = await client.agreement.getAgreementById(agreementId!);
    expect(agreement.institution_id).toBe(institution);

    // Delete agreement
    const agreementDelete = await client.agreement.deleteAgreement(agreementId!);
    expect(agreementDelete.detail).toBe(`End User Agreement ${agreementId} deleted`);
  });

  it("Test requisition api", async () => {
    const reference = randomUUID();
    const newRequisition = await client.requisition.createRequisition({
      redirectUrl: redirectUrl,
      institutionId: institution,
      userLanguage: "en",
      reference: reference,
      agreement: "",
    });
    const requisitionId = newRequisition.id;
    expect(newRequisition.reference).toBe(reference);
    expect(newRequisition.user_language).toBe("en");

    // Get requisition by id
    const requisition = await client.requisition.getRequisitionById(requisitionId!);
    expect(requisition.id).toBe(requisitionId);

    // Delete requisition
    const deletedRequisition = await client.requisition.deleteRequisition(requisitionId!);
    expect(deletedRequisition.detail).toBe(`Requisition ${requisitionId} deleted with all its End User Agreements`);
  });

  it("Test account data", async () => {
    const account = await client.account(process.env.ACCOUNT_ID!);

    const metaData = await account.getMetadata();
    expect(metaData.id).toBe(process.env.ACCOUNT_ID);

    const balance = await account.getBalances();
    expect(balance.balances).toBeDefined();

    const details = await account.getDetails();
    expect(details.account).toBeDefined();

    const transactions = await account.getTransactions();
    expect(transactions.transactions).toBeDefined();
  }, 60000);
});
