import type { NordigenClient } from "../NordigenClient.js";
import type {
  AccountApiParams,
  AccountGetPath,
  AccountGetPathToParams,
  AccountGetPathToResponse,
  AccountGetTransactionsParams,
  RetrieveAccountTransactionsResponse,
} from "../types/account.js";
import type { RetrieveAccountBalancesData, RetrieveAccountDetailsData, RetrieveAccountMetadataData } from "../generated.js";

export class AccountApi {
  private readonly endpoint = "accounts";

  private readonly client: NordigenClient;

  private readonly accountId: string;

  /**
   * Account api class
   * @param {Object} params
   */
  constructor({ client, accountId }: AccountApiParams) {
    this.client = client;
    this.accountId = accountId;
  }

  /**
   * Construct reusable get request
   *
   * @template {AccountGetPath} P
   * @param {P} path api endpoint
   * @param {AccountGetPathToParams[P]} [parameters] parameters
   * @returns {Promise<AccountGetPathToResponse[P]>} Account data object
   */
  private get<P extends AccountGetPath>(path: P, parameters: AccountGetPathToParams[P]): Promise<AccountGetPathToResponse[P]> {
    const url = `${this.endpoint}/${this.accountId}/${path}/`;
    return this.client.request({ endpoint: url, parameters: parameters || {} });
  }

  /**
   * Access account metadata
   * @returns {Promise<RetrieveAccountMetadataData>} Account metadata object
   */
  getMetadata(): Promise<RetrieveAccountMetadataData> {
    return this.client.request<RetrieveAccountMetadataData>({
      endpoint: `${this.endpoint}/${this.accountId}/`,
    });
  }

  /**
   * Access account details
   * @returns {Promise<RetrieveAccountDetailsData>} Object with account details
   */
  getDetails(): Promise<RetrieveAccountDetailsData> {
    return this.get("details", {});
  }

  /**
   * Access account balances
   * @returns {Promise<RetrieveAccountBalancesData>} Object with account balances
   */
  getBalances(): Promise<RetrieveAccountBalancesData> {
    return this.get("balances", {});
  }

  /**
   * Access account transactions
   * @param {AccountGetTransactionsParams} params
   * @returns {Promise<RetrieveAccountTransactionsResponse>} Object with account transactions
   */
  getTransactions({ dateFrom, dateTo }: AccountGetTransactionsParams = {}): Promise<RetrieveAccountTransactionsResponse> {
    const params: AccountGetPathToParams["transactions"] = {
      date_from: dateFrom,
      date_to: dateTo,
    };

    return this.get("transactions", params);
  }
}
