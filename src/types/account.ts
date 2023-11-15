import type { DateFilter, WithClient } from "./client.js";
import type { OmitIdParam } from "./common.js";
import type {
  RetrieveAccountBalancesData,
  RetrieveAccountDetailsData,
  RetrieveAccountTransactionsData,
  RetrieveAccountTransactionsParams,
} from "../generated.js";

export interface AccountApiParams extends WithClient {
  accountId: string;
}

export interface AccountGetTransactionsParams extends DateFilter {}

export type AccountGetPath = "details" | "balances" | "transactions";

// incorrectly generated transaction response types because the schema is not corretly defined
export interface RetrieveAccountTransactionsResponse {
  transactions: RetrieveAccountTransactionsData;
}

export interface AccountGetPathToResponse extends Record<AccountGetPath, {}> {
  details: RetrieveAccountDetailsData;
  balances: RetrieveAccountBalancesData;
  transactions: RetrieveAccountTransactionsResponse;
}
export interface AccountGetPathToParams extends Record<AccountGetPath, {}> {
  details: {};
  balances: {};
  transactions: OmitIdParam<RetrieveAccountTransactionsParams>;
}