import type { DateFilter, WithClient } from "./client.js";
import type { OmitIdParam } from "./common.js";
import type {
  CountryEnum,
  RetrieveAccountBalancesData,
  RetrieveAccountDetailsData,
  RetrieveAccountTransactionsData,
  RetrieveAccountTransactionsParams,
  RetrieveAccountTransactionsPremiumData,
  RetrieveAccountTransactionsPremiumParams,
} from "../generated.js";

export interface AccountApiParams extends WithClient {
  accountId: string;
}

export interface AccountGetTransactionsParams extends DateFilter {}

export interface AccountPremiumGetTransactionsParams extends AccountGetTransactionsParams {
  country?: CountryEnum;
}

export type AccountGetPath = "details" | "balances" | "transactions";

// incorrectly generated transaction response types because the schema is not corretly defined
export interface RetrieveAccountTransactionsResponse {
  transactions: RetrieveAccountTransactionsData;
}

export interface RetrieveAccountTransactionsPremiumResponse {
  transactions: RetrieveAccountTransactionsPremiumData;
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

export type AccountPremiumGetPath = "transactions";

export interface AccountPremiumGetPathToResponse extends Record<AccountGetPath, {}> {
  transactions: RetrieveAccountTransactionsPremiumResponse;
}
export interface AccountPremiumGetPathToParams extends Record<AccountPremiumGetPath, {}> {
  transactions: OmitIdParam<RetrieveAccountTransactionsPremiumParams>;
}
