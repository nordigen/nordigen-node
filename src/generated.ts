/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AcceptEuaData = EndUserAgreement;

export type AcceptEuaError = ErrorResponse;

/** AccountSerializer. */
export interface Account {
  /** The Account BBAN */
  bban?: string;
  /**
   * The date & time at which the account object was created.
   * @format date-time
   */
  created?: string;
  /** The Account IBAN */
  iban?: string;
  /**
   * The ID of this Account, used to refer to this account in other API calls.
   * @format uuid
   */
  id?: string;
  /** The ASPSP associated with this account. */
  institution_id?: string;
  /**
   * The date & time at which the account object was last accessed.
   * @format date-time
   */
  last_accessed?: string;
  /** The name of the account owner. */
  owner_name?: string;
  /** The processing status of this account. */
  status?: string;
}

/** AccountBalanceSerializer. */
export interface AccountBalance {
  balances?: BalanceSchema[];
}

/** AccountDetailSerializer. */
export interface AccountDetail {
  /** account */
  account: DetailSchema;
}

/** AccountSchema. */
export interface AccountSchema {
  /** bban */
  bban?: string;
  /** currency */
  currency?: string;
  /** iban */
  iban?: string;
  /** maskedPan */
  maskedPan?: string;
  /** msisdn */
  msisdn?: string;
  /** pan */
  pan?: string;
}

/** AccountTransactionsSerializer. */
export interface AccountTransactions {
  /** transactions */
  transactions: BankTransaction;
}

/** BalanceAmountSchema. */
export interface BalanceAmountSchema {
  /** amount */
  amount: string;
  /** currency */
  currency: string;
}

/** BalanceSchema. */
export interface BalanceSchema {
  /** balanceAmount */
  balanceAmount: BalanceAmountSchema;
  /** balanceType */
  balanceType: string;
  /** creditLimitIncluded */
  creditLimitIncluded?: boolean;
  /** lastChangeDateTime */
  lastChangeDateTime?: string;
  /** lastCommittedTransaction */
  lastCommittedTransaction?: string;
  /** referenceDate */
  referenceDate?: string;
}

/** BankTransactionSerializer. */
export interface BankTransaction {
  booked: TransactionSchema[];
  pending?: TransactionSchema[];
}

export type CreateEuaData = EndUserAgreement;

export type CreateEuaError = ErrorResponse;

export type CreateRequisitionData = SpectacularRequisition;

export type CreateRequisitionError = ErrorResponse;

/** CurrencyExchangeSchema. */
export interface CurrencyExchangeSchema {
  /** contractIdentification */
  contractIdentification?: string;
  /** exchangeRate */
  exchangeRate?: string;
  /** quotationDate */
  quotationDate?: string;
  /** sourceCurrency */
  sourceCurrency?: string;
  /** targetCurrency */
  targetCurrency?: string;
  /** unitCurrency */
  unitCurrency?: string;
}

export type DeleteEuaByIdData = SuccessfulDeleteResponse;

export type DeleteEuaByIdError = ErrorResponse;

export type DeleteRequisitionByIdData = SuccessfulDeleteResponse;

export type DeleteRequisitionByIdError = ErrorResponse;

/** DetailSchema. */
export interface DetailSchema {
  /** bban */
  bban?: string;
  /** bic */
  bic?: string;
  /** cashAccountType */
  cashAccountType?: string;
  /** currency */
  currency?: string;
  /** details */
  details?: string;
  /** displayName */
  displayName?: string;
  /** iban */
  iban?: string;
  /** linkedAccounts */
  linkedAccounts?: string;
  /** maskedPan */
  maskedPan?: string;
  /** msisdn */
  msisdn?: string;
  /** name */
  name?: string;
  /** ownerAddressStructured */
  ownerAddressStructured?: OwnerAddressStructuredSchema;
  /** ownerAddressUnstructured */
  ownerAddressUnstructured?: string[];
  /** ownerName */
  ownerName?: string;
  /** product */
  product?: string;
  /** resourceId */
  resourceId?: string;
  /** SortCodeAccountNumber returned by some UK banks (6 digit Sort Code and 8 digit Account Number) */
  scan?: string;
  /** status */
  status?: string;
  /** usage */
  usage?: string;
}

/** Represents an end-user agreement. */
export interface EndUserAgreement {
  /**
   * Accepted Date
   * The date & time at which the end user accepted the agreement.
   * @format date-time
   */
  accepted?: string | null;
  /**
   * Level of information to access (by default all)
   * Array containing one or several values of ['balances', 'details', 'transactions']
   * @default ["balances","details","transactions"]
   */
  access_scope?: any[];
  /**
   * Access Valid For (Days)
   * Number of days from acceptance that the access can be used.
   * @min 1
   * @max 180
   * @default 90
   */
  access_valid_for_days?: number;
  /**
   * Created Date
   * The date & time at which the end user agreement was created.
   * @format date-time
   */
  created?: string;
  /**
   * End User Agreement ID
   * The ID of this End User Agreement, used to refer to this end user agreement in other API calls.
   * @format uuid
   */
  id?: string;
  /** an Institution ID for this EUA */
  institution_id: string;
  /**
   * Maximum Historical Days
   * Maximum number of days of transaction data to retrieve.
   * @min 1
   * @max 730
   * @default 90
   */
  max_historical_days?: number;
}

/** Represents an end-user agreement. */
export interface EndUserAgreementRequest {
  /**
   * Level of information to access (by default all)
   * Array containing one or several values of ['balances', 'details', 'transactions']
   * @default ["balances","details","transactions"]
   */
  access_scope?: any[];
  /**
   * Access Valid For (Days)
   * Number of days from acceptance that the access can be used.
   * @min 1
   * @max 180
   * @default 90
   */
  access_valid_for_days?: number;
  /**
   * an Institution ID for this EUA
   * @minLength 1
   */
  institution_id: string;
  /**
   * Maximum Historical Days
   * Maximum number of days of transaction data to retrieve.
   * @min 1
   * @max 730
   * @default 90
   */
  max_historical_days?: number;
}

/** Represents end-user details. */
export interface EnduserAcceptanceDetailsRequest {
  /**
   * end user IP address
   * @minLength 1
   */
  ip_address: string;
  /**
   * user agent string for the end user
   * @minLength 1
   */
  user_agent: string;
}

export interface ErrorResponse {
  detail: string;
  status_code: number;
  summary: string;
  type?: string;
}

export type GetANewAccessTokenData = SpectacularJWTRefresh;

export type GetANewAccessTokenError = ErrorResponse;

/** Represents an Integration. */
export interface Integration {
  bic?: string;
  countries: string[];
  id: string;
  logo: string;
  max_access_valid_for_days?: string;
  name: string;
  /** @default "90" */
  transaction_total_days?: string;
}

/** IntegrationSerializer for Retrieve endpoint. */
export interface IntegrationRetrieve {
  bic?: string;
  countries: string[];
  id: string;
  identification_codes: any[];
  logo: string;
  max_access_valid_for_days?: string;
  name: string;
  supported_features: any[];
  supported_payments: Record<string, any>;
  /** @default "90" */
  transaction_total_days?: string;
}

/** Obtain JWT pair. */
export interface JWTObtainPairRequest {
  /**
   * Secret id from /user-secrets/
   * @minLength 1
   */
  secret_id: string;
  /**
   * Secret key from /user-secrets/
   * @minLength 1
   */
  secret_key: string;
}

/** Refresh access token. */
export interface JWTRefreshRequest {
  /** @minLength 1 */
  refresh: string;
}

export type ObtainNewAccessRefreshTokenPairData = SpectacularJWTObtain;

export type ObtainNewAccessRefreshTokenPairError = ErrorResponse;

/** OwnerAddressStructuredSchema. */
export interface OwnerAddressStructuredSchema {
  /** buildingNumber */
  buildingNumber?: string;
  /** country */
  country?: string;
  /** postCode */
  postCode?: string;
  /** streetName */
  streetName?: string;
  /** townName */
  townName?: string;
}

export interface PaginatedEndUserAgreementList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "https://bankaccountdata.gocardless.com/api/v2/agreements/enduser/?limit=100&offset=0"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "https://bankaccountdata.gocardless.com/api/v2/agreements/enduser/?limit=100&offset=0"
   */
  previous?: string | null;
  results: EndUserAgreement[];
}

export interface PaginatedRequisitionList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "https://bankaccountdata.gocardless.com/api/v2/requisitions/?limit=100&offset=0"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "https://bankaccountdata.gocardless.com/api/v2/requisitions/?limit=100&offset=0"
   */
  previous?: string | null;
  results: Requisition[];
}

/** RequisitionSerializer. */
export interface Requisition {
  /**
   * option to enable account selection view for the end user
   * @default false
   */
  account_selection?: boolean;
  /** array of account IDs retrieved within a scope of this requisition */
  accounts?: string[];
  /**
   * EUA associated with this requisition
   * @format uuid
   */
  agreement?: string;
  /**
   * Created Date
   * The date & time at which the requisition was created.
   * @format date-time
   */
  created?: string | null;
  /** @format uuid */
  id?: string;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /**
   * link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.gocardless.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/SANDBOXFINANCE_SFIN0000"
   */
  link?: string;
  /**
   * redirect URL to your application after end-user authorization with ASPSP
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * enable redirect back to the client after account list received
   * @default false
   */
  redirect_immediate?: boolean;
  /**
   * additional ID to identify the end user
   * @maxLength 256
   */
  reference?: string;
  /**
   * optional SSN field to verify ownership of the account
   * @maxLength 64
   */
  ssn?: string;
  /**
   * Requisition status
   * status of this requisition
   */
  status?: StatusEnum;
  /**
   * A two-letter country code (ISO 639-1)
   * @maxLength 5
   */
  user_language?: string;
}

export type RequisitionByIdData = Requisition;

export type RequisitionByIdError = ErrorResponse;

/** RequisitionSerializer. */
export interface RequisitionRequest {
  /**
   * option to enable account selection view for the end user
   * @default false
   */
  account_selection?: boolean;
  /**
   * EUA associated with this requisition
   * @format uuid
   */
  agreement?: string;
  /**
   * an Institution ID for this Requisition
   * @minLength 1
   */
  institution_id: string;
  /**
   * redirect URL to your application after end-user authorization with ASPSP
   * @format uri
   * @minLength 1
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * enable redirect back to the client after account list received
   * @default false
   */
  redirect_immediate?: boolean;
  /**
   * additional ID to identify the end user
   * @minLength 1
   * @maxLength 256
   */
  reference?: string;
  /**
   * optional SSN field to verify ownership of the account
   * @maxLength 64
   */
  ssn?: string;
  /**
   * A two-letter country code (ISO 639-1)
   * @minLength 1
   * @maxLength 5
   */
  user_language?: string;
}

export type RetrieveAccountBalancesData = AccountBalance;

export type RetrieveAccountBalancesError = ErrorResponse;

export type RetrieveAccountDetailsData = AccountDetail;

export type RetrieveAccountDetailsError = ErrorResponse;

export type RetrieveAccountMetadataData = Account;

export type RetrieveAccountMetadataError = ErrorResponse;

export type RetrieveAccountTransactionsData = AccountTransactions;

export type RetrieveAccountTransactionsError = ErrorResponse;

export interface RetrieveAccountTransactionsParams {
  /** @format date */
  date_from?: string;
  /** @format date */
  date_to?: string;
  id: string;
}

export type RetrieveAllEuAsForAnEndUserData = PaginatedEndUserAgreementList;

export type RetrieveAllEuAsForAnEndUserError = ErrorResponse;

export interface RetrieveAllEuAsForAnEndUserParams {
  /**
   * Number of results to return per page.
   * @min 1
   * @default 100
   */
  limit?: number;
  /**
   * The initial zero-based index from which to return the results.
   * @min 0
   * @default 0
   */
  offset?: number;
}

export type RetrieveAllRequisitionsData = PaginatedRequisitionList;

export type RetrieveAllRequisitionsError = ErrorResponse;

export interface RetrieveAllRequisitionsParams {
  /**
   * Number of results to return per page.
   * @min 1
   * @default 100
   */
  limit?: number;
  /**
   * The initial zero-based index from which to return the results.
   * @min 0
   * @default 0
   */
  offset?: number;
}

export type RetrieveAllSupportedInstitutionsInAGivenCountryData = Integration[];

export type RetrieveAllSupportedInstitutionsInAGivenCountryError = ErrorResponse;

export interface RetrieveAllSupportedInstitutionsInAGivenCountryParams {
  /** Boolean value, indicating if access scopes are supported */
  access_scopes_supported?: string;
  /** Boolean value, indicating if account selection is supported */
  account_selection_supported?: string;
  /** Boolean value, indicating if business accounts are supported */
  business_accounts_supported?: string;
  /** Boolean value, indicating if card accounts are supported */
  card_accounts_supported?: string;
  /** Boolean value, indicating if corporate accounts are supported */
  corporate_accounts_supported?: string;
  /** ISO 3166 two-character country code */
  country?: string;
  /** Boolean value, indicating if payment submission is supported */
  payment_submission_supported?: string;
  /** Boolean value, indicating if payments are supported */
  payments_enabled?: string;
  /** Boolean value, indicating if pending transactions are supported */
  pending_transactions_supported?: string;
  /** Boolean value, indicating if private accounts are supported */
  private_accounts_supported?: string;
  /** Boolean value, indicating if debtor account can be read before submitting payment */
  read_debtor_account_supported?: string;
  /** Boolean value, indicating if read refund account is supported */
  read_refund_account_supported?: string;
  /** Boolean value, indicating if ssn verification is supported */
  ssn_verification_supported?: string;
}

export type RetrieveEuaByIdData = EndUserAgreement;

export type RetrieveEuaByIdError = ErrorResponse;

export type RetrieveInstitutionData = IntegrationRetrieve;

export type RetrieveInstitutionError = ErrorResponse;

/** Obtain new JWT pair. */
export interface SpectacularJWTObtain {
  /** Your access token */
  access?: string;
  /**
   * Access token expires in seconds
   * @default 86400
   */
  access_expires?: number;
  /** Your refresh token */
  refresh?: string;
  /**
   * Refresh token expires in seconds
   * @default 2592000
   */
  refresh_expires?: number;
}

/** Refresh Access token. */
export interface SpectacularJWTRefresh {
  /** Your access token */
  access?: string;
  /**
   * Access token expires in seconds
   * @default 86400
   */
  access_expires?: number;
}

/** Create requisition. */
export interface SpectacularRequisition {
  /**
   * option to enable account selection view for the end user
   * @default false
   */
  account_selection?: boolean;
  /**
   * array of account IDs retrieved within a scope of this requisition
   * @default []
   */
  accounts?: any[];
  /**
   * EUA associated with this requisition
   * @format uuid
   */
  agreement?: string;
  /**
   * Created Date
   * The date & time at which the requisition was created.
   * @format date-time
   */
  created?: string | null;
  /** @format uuid */
  id?: string;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /**
   * link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.gocardless.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/SANDBOXFINANCE_SFIN0000"
   */
  link?: string;
  /**
   * redirect URL to your application after end-user authorization with ASPSP
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * enable redirect back to the client after account list received
   * @default false
   */
  redirect_immediate?: boolean;
  /**
   * additional ID to identify the end user
   * @maxLength 256
   */
  reference?: string;
  /**
   * optional SSN field to verify ownership of the account
   * @maxLength 64
   */
  ssn?: string;
  /**
   * Requisition status
   * status of this requisition
   */
  status?: StatusEnum;
  /**
   * A two-letter country code (ISO 639-1)
   * @maxLength 5
   */
  user_language?: string;
}

export enum StatusEnum {
  CR = "CR",
  ID = "ID",
  LN = "LN",
  RJ = "RJ",
  ER = "ER",
  SU = "SU",
  EX = "EX",
  GC = "GC",
  UA = "UA",
  GA = "GA",
  SA = "SA",
}

export interface SuccessfulDeleteResponse {
  detail: string;
  summary: string;
}

/** TransactionAmountSchema. */
export interface TransactionAmountSchema {
  /** amount */
  amount: string;
  /** currency */
  currency: string;
}

/** TransactionSchema. */
export interface TransactionSchema {
  /** additionalInformation */
  additionalInformation?: string;
  /** bankTransactionCode */
  bankTransactionCode?: string;
  /** bookingDate */
  bookingDate?: string;
  /** bookingDateTime */
  bookingDateTime?: string;
  /** checkId */
  checkId?: string;
  /** creditorAccount */
  creditorAccount?: AccountSchema;
  /** creditorId */
  creditorId?: string;
  /** creditorName */
  creditorName?: string;
  currencyExchange?: CurrencyExchangeSchema[];
  /** debtorAccount */
  debtorAccount?: AccountSchema;
  /** debtorName */
  debtorName?: string;
  /** endToEndId */
  endToEndId?: string;
  /** entryReference */
  entryReference?: string;
  /** internalTransactionId */
  internalTransactionId?: string;
  /** mandateId */
  mandateId?: string;
  /** proprietaryBankTransactionCode */
  proprietaryBankTransactionCode?: string;
  /** purposeCode */
  purposeCode?: string;
  /** remittanceInformationStructured */
  remittanceInformationStructured?: string;
  /** remittanceInformationStructuredArray */
  remittanceInformationStructuredArray?: string[];
  /** remittanceInformationUnstructured */
  remittanceInformationUnstructured?: string;
  /** remittanceInformationUnstructuredArray */
  remittanceInformationUnstructuredArray?: string[];
  /** transactionAmount */
  transactionAmount: TransactionAmountSchema;
  /** transactionId */
  transactionId?: string;
  /** ultimateCreditor */
  ultimateCreditor?: string;
  /** ultimateDebtor */
  ultimateDebtor?: string;
  /** valueDate */
  valueDate?: string;
  /** valueDateTime */
  valueDateTime?: string;
}
