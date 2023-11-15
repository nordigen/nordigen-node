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

/** The representation of a bank account. */
export interface Account {
  /**
   * Created date/time
   * The date & time at which the account object was created.
   * @format date-time
   */
  created?: string;
  /** The Account IBAN */
  iban?: string;
  /**
   * Account ID
   * The ID of this Account, used to refer to this account in other API calls.
   * @format uuid
   */
  id?: string;
  /**
   * ASPSP ID
   * The ASPSP associated with this account.
   */
  institution_id?: string;
  /**
   * Last accessed date/time
   * The date & time at which the account object was last accessed.
   * @format date-time
   */
  last_accessed?: string | null;
  /**
   * Account Owner Name
   * The name of the account owner.
   */
  owner_name?: string;
  /**
   * Account Status
   * The processing status of this account.
   */
  status?: AccountStatusEnum;
}

export interface AccountBalanceSchema {
  balances?: BalanceSchema[];
}

export interface AccountDetailSchema {
  /** account */
  account: DetailSchema;
}

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

export enum AccountStatusEnum {
  DISCOVERED = "DISCOVERED",
  PROCESSING = "PROCESSING",
  READY = "READY",
  ERROR = "ERROR",
  SUSPENDED = "SUSPENDED",
}

/**
 * * `AT` - Austria
 * * `BE` - Belgium
 * * `BG` - Bulgaria
 * * `HR` - Croatia
 * * `CY` - Cyprus
 * * `CZ` - Czechia
 * * `DK` - Denmark
 * * `EE` - Estonia
 * * `FI` - Finland
 * * `FR` - France
 * * `DE` - Germany
 * * `GR` - Greece
 * * `HU` - Hungary
 * * `IS` - Iceland
 * * `IE` - Ireland
 * * `IT` - Italy
 * * `LV` - Latvia
 * * `LI` - Liechtenstein
 * * `LT` - Lithuania
 * * `LU` - Luxembourg
 * * `MT` - Malta
 * * `NL` - Netherlands
 * * `NO` - Norway
 * * `PL` - Poland
 * * `PT` - Portugal
 * * `RO` - Romania
 * * `SK` - Slovakia
 * * `SI` - Slovenia
 * * `ES` - Spain
 * * `SE` - Sweden
 * * `GB` - United Kingdom
 * * `US` - United States of America
 */
export enum AddressCountryEnum {
  AT = "AT",
  BE = "BE",
  BG = "BG",
  HR = "HR",
  CY = "CY",
  CZ = "CZ",
  DK = "DK",
  EE = "EE",
  FI = "FI",
  FR = "FR",
  DE = "DE",
  GR = "GR",
  HU = "HU",
  IS = "IS",
  IE = "IE",
  IT = "IT",
  LV = "LV",
  LI = "LI",
  LT = "LT",
  LU = "LU",
  MT = "MT",
  NL = "NL",
  NO = "NO",
  PL = "PL",
  PT = "PT",
  RO = "RO",
  SK = "SK",
  SI = "SI",
  ES = "ES",
  SE = "SE",
  GB = "GB",
  US = "US",
}

export interface BACS {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface BT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface BalanceAmountSchema {
  /** amount */
  amount: string;
  /** currency */
  currency: string;
}

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

export interface BankTransactionStatusSchema {
  booked: TransactionSchema[];
  pending?: TransactionSchema[];
}

export interface CBCT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface CHAPS {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

/**
 * * `AT` - Austria
 * * `BE` - Belgium
 * * `BG` - Bulgaria
 * * `HR` - Croatia
 * * `CY` - Cyprus
 * * `CZ` - Czechia
 * * `DK` - Denmark
 * * `EE` - Estonia
 * * `FI` - Finland
 * * `FR` - France
 * * `DE` - Germany
 * * `GR` - Greece
 * * `HU` - Hungary
 * * `IS` - Iceland
 * * `IE` - Ireland
 * * `IT` - Italy
 * * `LV` - Latvia
 * * `LI` - Liechtenstein
 * * `LT` - Lithuania
 * * `LU` - Luxembourg
 * * `MT` - Malta
 * * `NL` - Netherlands
 * * `NO` - Norway
 * * `PL` - Poland
 * * `PT` - Portugal
 * * `RO` - Romania
 * * `SK` - Slovakia
 * * `SI` - Slovenia
 * * `ES` - Spain
 * * `SE` - Sweden
 * * `GB` - United Kingdom
 * * `US` - United States of America
 */
export enum CountryEnum {
  AT = "AT",
  BE = "BE",
  BG = "BG",
  HR = "HR",
  CY = "CY",
  CZ = "CZ",
  DK = "DK",
  EE = "EE",
  FI = "FI",
  FR = "FR",
  DE = "DE",
  GR = "GR",
  HU = "HU",
  IS = "IS",
  IE = "IE",
  IT = "IT",
  LV = "LV",
  LI = "LI",
  LT = "LT",
  LU = "LU",
  MT = "MT",
  NL = "NL",
  NO = "NO",
  PL = "PL",
  PT = "PT",
  RO = "RO",
  SK = "SK",
  SI = "SI",
  ES = "ES",
  SE = "SE",
  GB = "GB",
  US = "US",
}

export type CreateEuaData = EndUserAgreement;

export type CreateEuaError = ErrorResponse;

export type CreateRequisitionData = SpectacularRequisition;

export type CreateRequisitionError = ErrorResponse;

/** Creditor account read serializer. */
export interface CreditorAccount {
  /**
   * Creditor account type identifier
   * @maxLength 128
   */
  account: string;
  /**
   * Creditor account address country
   * @maxLength 2
   */
  address_country?: string;
  /**
   * Creditor account currency
   * @maxLength 3
   */
  currency: string;
  /**
   * Unique entry ID
   * @format uuid
   */
  id?: string;
  /**
   * Creditor account name
   * @maxLength 70
   */
  name: string;
  /**
   * Creditor account type
   *
   * * `IBAN` - IBAN
   * * `SCAN` - SortCodeAccountNumber
   * * `BBAN` - BBAN
   * @default "IBAN"
   */
  type?: TypeEnum;
}

/** Creditor account write serializer. */
export interface CreditorAccountWrite {
  /**
   * Creditor account type identifier
   * @maxLength 128
   */
  account: string;
  /**
   * Creditor account address city
   * @maxLength 140
   */
  address_city?: string;
  /**
   * * `AT` - Austria
   * * `BE` - Belgium
   * * `BG` - Bulgaria
   * * `HR` - Croatia
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `EE` - Estonia
   * * `FI` - Finland
   * * `FR` - France
   * * `DE` - Germany
   * * `GR` - Greece
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IE` - Ireland
   * * `IT` - Italy
   * * `LV` - Latvia
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MT` - Malta
   * * `NL` - Netherlands
   * * `NO` - Norway
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `RO` - Romania
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `ES` - Spain
   * * `SE` - Sweden
   * * `GB` - United Kingdom
   * * `US` - United States of America
   */
  address_country?: AddressCountryEnum;
  /**
   * Creditor account address street
   * @maxLength 140
   */
  address_street?: string;
  /**
   * Creditor account BICFI Identifier
   * @maxLength 128
   */
  agent?: string;
  /**
   * Creditor account agent name
   * @maxLength 140
   */
  agent_name?: string;
  /**
   * Creditor account currency
   * @maxLength 3
   */
  currency: string;
  /**
   * Unique entry ID
   * @format uuid
   */
  id?: string;
  /** an Institution ID for this CreditorAccount */
  institution_id?: string;
  /**
   * Creditor account name
   * @maxLength 70
   */
  name: string;
  /**
   * Creditor account address post code
   * @maxLength 30
   */
  post_code?: string;
  /**
   * Creditor account type
   *
   * * `IBAN` - IBAN
   * * `SCAN` - SortCodeAccountNumber
   * * `BBAN` - BBAN
   * @default "IBAN"
   */
  type?: TypeEnum;
}

/** Creditor account write serializer. */
export interface CreditorAccountWriteRequest {
  /**
   * Creditor account type identifier
   * @minLength 1
   * @maxLength 128
   */
  account: string;
  /**
   * Creditor account address city
   * @minLength 1
   * @maxLength 140
   */
  address_city?: string;
  /**
   * * `AT` - Austria
   * * `BE` - Belgium
   * * `BG` - Bulgaria
   * * `HR` - Croatia
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `EE` - Estonia
   * * `FI` - Finland
   * * `FR` - France
   * * `DE` - Germany
   * * `GR` - Greece
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IE` - Ireland
   * * `IT` - Italy
   * * `LV` - Latvia
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MT` - Malta
   * * `NL` - Netherlands
   * * `NO` - Norway
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `RO` - Romania
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `ES` - Spain
   * * `SE` - Sweden
   * * `GB` - United Kingdom
   * * `US` - United States of America
   */
  address_country?: AddressCountryEnum;
  /**
   * Creditor account address street
   * @minLength 1
   * @maxLength 140
   */
  address_street?: string;
  /**
   * Creditor account BICFI Identifier
   * @minLength 1
   * @maxLength 128
   */
  agent?: string;
  /**
   * Creditor account agent name
   * @minLength 1
   * @maxLength 140
   */
  agent_name?: string;
  /**
   * Creditor account currency
   * @minLength 1
   * @maxLength 3
   */
  currency: string;
  /**
   * an Institution ID for this CreditorAccount
   * @minLength 1
   */
  institution_id?: string;
  /**
   * Creditor account name
   * @minLength 1
   * @maxLength 70
   */
  name: string;
  /**
   * Creditor account address post code
   * @minLength 1
   * @maxLength 30
   */
  post_code?: string;
  /**
   * Creditor account type
   *
   * * `IBAN` - IBAN
   * * `SCAN` - SortCodeAccountNumber
   * * `BBAN` - BBAN
   * @default "IBAN"
   */
  type?: TypeEnum;
}

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

export interface DCT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

/** Debtor account write serializer. */
export interface DebtorAccountWrite {
  /**
   * Debtor account type identifier
   * @maxLength 128
   */
  account?: string;
  /**
   * Debtor account address country
   * @maxLength 2
   */
  address_country?: string;
  /**
   * Debtor account address street
   * @maxLength 140
   */
  address_street?: string;
  /**
   * Creditor account BICFI Identifier
   * @maxLength 128
   */
  agent?: string;
  /**
   * Debtor account currency
   * @maxLength 3
   */
  currency?: string;
  /**
   * Debtor account name
   * @maxLength 70
   */
  name: string;
  /**
   * Debtor account post code
   * @maxLength 30
   */
  post_code?: string;
  /**
   * Debtor account type
   *
   * * `IBAN` - IBAN
   * * `SCAN` - SortCodeAccountNumber
   * * `BBAN` - BBAN
   * @default "IBAN"
   */
  type?: TypeEnum;
  /**
   * Debtor account type identifier
   * @maxLength 128
   */
  type_number?: string;
}

/** Debtor account write serializer. */
export interface DebtorAccountWriteRequest {
  /**
   * Debtor account type identifier
   * @minLength 1
   * @maxLength 128
   */
  account?: string;
  /**
   * Debtor account address country
   * @minLength 1
   * @maxLength 2
   */
  address_country?: string;
  /**
   * Debtor account address street
   * @minLength 1
   * @maxLength 140
   */
  address_street?: string;
  /**
   * Creditor account BICFI Identifier
   * @minLength 1
   * @maxLength 128
   */
  agent?: string;
  /**
   * Debtor account currency
   * @minLength 1
   * @maxLength 3
   */
  currency?: string;
  /**
   * Debtor account name
   * @minLength 1
   * @maxLength 70
   */
  name: string;
  /**
   * Debtor account post code
   * @minLength 1
   * @maxLength 30
   */
  post_code?: string;
  /**
   * Debtor account type
   *
   * * `IBAN` - IBAN
   * * `SCAN` - SortCodeAccountNumber
   * * `BBAN` - BBAN
   * @default "IBAN"
   */
  type?: TypeEnum;
  /**
   * Debtor account type identifier
   * @minLength 1
   * @maxLength 128
   */
  type_number?: string;
}

export type DeleteEuaByIdError = ErrorResponse;

export type DeleteRequisitionByIdError = ErrorResponse;

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

/**
 * * `following` - following
 * * `preceding` - preceding
 */
export enum ExecutionRuleEnum {
  Following = "following",
  Preceding = "preceding",
}

export interface FPS {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

/**
 * * `Daily` - Daily
 * * `Weekly` - Weekly
 * * `EveryTwoWeeks` - EveryTwoWeeks
 * * `Monthly` - Monthly
 * * `EveryTwoMonths` - EveryTwoMonths
 * * `Quarterly` - Quarterly
 * * `SemiAnnual` - SemiAnnual
 * * `Annual` - Annual
 * * `MonthlyVariable` - MonthlyVariable
 */
export enum FrequencyEnum {
  Daily = "Daily",
  Weekly = "Weekly",
  EveryTwoWeeks = "EveryTwoWeeks",
  Monthly = "Monthly",
  EveryTwoMonths = "EveryTwoMonths",
  Quarterly = "Quarterly",
  SemiAnnual = "SemiAnnual",
  Annual = "Annual",
  MonthlyVariable = "MonthlyVariable",
}

export type GetANewAccessTokenData = SpectacularJWTRefresh;

export type GetANewAccessTokenError = ErrorResponse;

export interface IDCT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface ISCT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

/** InstructedAmountSerializer. */
export interface InstructedAmount {
  /**
   * Instructed amount
   * @format decimal
   * @pattern ^-?\d{0,10}(?:\.\d{0,2})?$
   */
  amount: string;
  /**
   * Instructed amount currency
   * @maxLength 3
   */
  currency: string;
}

/** InstructedAmountSerializer. */
export interface InstructedAmountRequest {
  /**
   * Instructed amount
   * @format decimal
   * @pattern ^-?\d{0,10}(?:\.\d{0,2})?$
   */
  amount: string;
  /**
   * Instructed amount currency
   * @minLength 1
   * @maxLength 3
   */
  currency: string;
}

/** Represents an Integration. */
export interface Integration {
  bic?: string;
  countries: string[];
  id: string;
  logo: string;
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

export interface MT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface MinimumRequiredFields {
  "single-payment": SinglePayment;
}

export type ObtainNewAccessRefreshTokenPairData = SpectacularJWTObtain;

export type ObtainNewAccessRefreshTokenPairError = ErrorResponse;

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

export interface PaginatedCreditorAccountList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: CreditorAccount[];
}

export interface PaginatedEndUserAgreementList {
  /** @example 123 */
  count?: number;
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
  results?: EndUserAgreement[];
}

export interface PaginatedPaymentReadList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: PaymentRead[];
}

export interface PaginatedRequisitionList {
  /** @example 123 */
  count?: number;
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
  results?: Requisition[];
}

export interface PaymentDeleted {
  detail: string;
  summary: string;
}

/**
 * * `T2P` - target-2-payments
 * * `SCT` - sepa-credit-transfers
 * * `ISCT` - instant-sepa-credit-transfer
 * * `CBCT` - cross-border-credit-transfers
 * * `BACS` - Back Payment Scheme
 * * `CHAPS` - CHAPS Payment Scheme
 * * `FPS` - Faster Payment Scheme
 * * `SWIFT` - Swift Payment Service
 * * `BT` - Balance Transfer
 * * `MT` - Money Transfer
 * * `DCT` - domestic-credit-transfer
 * * `IDCT` - instant-domestic-credit-transfer
 */
export enum PaymentProductEnum {
  T2P = "T2P",
  SCT = "SCT",
  ISCT = "ISCT",
  CBCT = "CBCT",
  BACS = "BACS",
  CHAPS = "CHAPS",
  FPS = "FPS",
  SWIFT = "SWIFT",
  BT = "BT",
  MT = "MT",
  DCT = "DCT",
  IDCT = "IDCT",
}

/** PaymentReadSerializer. */
export interface PaymentRead {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /** Debtor account write serializer. */
  debtor_account: DebtorAccountWrite;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
}

/** PaymentReadSerializer. */
export interface PaymentReadRequest {
  /** Creditor account */
  creditor_object: CreditorAccountWriteRequest;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @minLength 1
   * @maxLength 35
   */
  custom_payment_id?: string;
  /** Debtor account write serializer. */
  debtor_account: DebtorAccountWriteRequest;
  /**
   * Payment description
   * @minLength 1
   * @default "GOCARDLESS"
   */
  description?: string;
  /**
   * Institution ID for Payment
   * @minLength 1
   */
  institution_id: string;
  /** Instructed amount */
  instructed_amount: InstructedAmountRequest;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @minLength 1
   * @maxLength 1024
   */
  redirect: string | null;
}

/**
 * * `INIT` - Initiated. Payment has been initiated.
 * * `ERRE` - ExecutionError. We experienced error on payment execution.
 * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
 * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
 * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
 * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
 * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
 * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
 * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
 * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
 * * `RCVD` - Received. Payment initiation has been received by the receiving agent
 * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
 * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
 * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
 * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
 * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
 * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
 */
export enum PaymentStatusEnum {
  INIT = "INIT",
  ERRE = "ERRE",
  ERRS = "ERRS",
  ACCC = "ACCC",
  ACCP = "ACCP",
  ACSC = "ACSC",
  ACSP = "ACSP",
  ACTC = "ACTC",
  ACWC = "ACWC",
  ACWP = "ACWP",
  RCVD = "RCVD",
  PDNG = "PDNG",
  RJCT = "RJCT",
  CANC = "CANC",
  ACFC = "ACFC",
  PATC = "PATC",
  PART = "PART",
}

/**
 * * `single-payment` - payment
 * * `bulk-payment` - bulk-payments
 * * `periodic-payment` - periodic-payments
 */
export enum PaymentTypeEnum {
  SinglePayment = "single-payment",
  BulkPayment = "bulk-payment",
  PeriodicPayment = "periodic-payment",
}

/** PaymentWriteSerializer. */
export interface PaymentWrite {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /** Periodic Payment Serializer. */
  periodic_payment?: PeriodicPayment;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

/** PaymentWriteSerializer. */
export interface PaymentWriteRequest {
  /** Creditor account */
  creditor_object: CreditorAccountWriteRequest;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @minLength 1
   * @maxLength 35
   */
  custom_payment_id?: string;
  /** Debtor account */
  debtor_account?: DebtorAccountWriteRequest;
  /**
   * Payment description
   * @minLength 1
   * @default "GOCARDLESS"
   */
  description?: string;
  /**
   * Institution ID for Payment
   * @minLength 1
   */
  institution_id: string;
  /** Instructed amount */
  instructed_amount: InstructedAmountRequest;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /** Periodic Payment Serializer. */
  periodic_payment?: PeriodicPaymentRequest;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @minLength 1
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

/** Periodic Payment Serializer. */
export interface PeriodicPayment {
  day_of_execution?: string;
  /** @format date */
  end_date?: string;
  /**
   * Behavior when periodic payment dates fall on holiday.
   *
   * * `following` - following
   * * `preceding` - preceding
   * @default "following"
   */
  execution_rule?: ExecutionRuleEnum;
  /** @default "Monthly" */
  frequency?: FrequencyEnum;
  /** @format date */
  start_date: string;
}

/** Periodic Payment Serializer. */
export interface PeriodicPaymentRequest {
  /** @minLength 1 */
  day_of_execution?: string;
  /** @format date */
  end_date?: string;
  /**
   * Behavior when periodic payment dates fall on holiday.
   *
   * * `following` - following
   * * `preceding` - preceding
   * @default "following"
   */
  execution_rule?: ExecutionRuleEnum;
  /** @default "Monthly" */
  frequency?: FrequencyEnum;
  /** @format date */
  start_date: string;
}

/** Filter country. */
export interface PremiumAccountQuery {
  /**
   * * `AT` - Austria
   * * `BE` - Belgium
   * * `BG` - Bulgaria
   * * `HR` - Croatia
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `EE` - Estonia
   * * `FI` - Finland
   * * `FR` - France
   * * `DE` - Germany
   * * `GR` - Greece
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IE` - Ireland
   * * `IT` - Italy
   * * `LV` - Latvia
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MT` - Malta
   * * `NL` - Netherlands
   * * `NO` - Norway
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `RO` - Romania
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `ES` - Spain
   * * `SE` - Sweden
   * * `GB` - United Kingdom
   * * `US` - United States of America
   */
  country?: CountryEnum;
  /** @format date */
  date_from?: string;
  /** @format date */
  date_to?: string;
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
   * @default "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}"
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
  status?: Status1C5Enum;
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

export type RetrieveAccountBalancesData = AccountBalanceSchema;

export type RetrieveAccountBalancesError = ErrorResponse;

export type RetrieveAccountDetailsData = AccountDetailSchema;

export type RetrieveAccountDetailsError = ErrorResponse;

export type RetrieveAccountMetadataData = Account;

export type RetrieveAccountMetadataError = ErrorResponse;

export type RetrieveAccountTransactionsData = BankTransactionStatusSchema;

export type RetrieveAccountTransactionsError = ErrorResponse;

export interface RetrieveAccountTransactionsParams {
  /** @format date */
  date_from?: string;
  /** @format date */
  date_to?: string;
  /**
   * A UUID string identifying this account.
   * @format uuid
   */
  id: string;
}

export type RetrieveAccountTransactionsPremiumData = BankTransactionStatusSchema;

export type RetrieveAccountTransactionsPremiumError = ErrorResponse;

export interface RetrieveAccountTransactionsPremiumParams {
  /** ISO 3166 two-character country code */
  country?: string;
  /** @format date */
  date_from?: string;
  /** @format date */
  date_to?: string;
  /**
   * A UUID string identifying this account.
   * @format uuid
   */
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
   * The initial index from which to return the results.
   * @min 1
   * @default 1
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
   * The initial index from which to return the results.
   * @min 1
   * @default 1
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

export interface SCT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface SWIFT {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface SinglePayment {
  T2P: T2P;
  BACS: BACS;
  BT: BT;
  CBCT: CBCT;
  CHAPS: CHAPS;
  DCT: DCT;
  FPS: FPS;
  IDCT: IDCT;
  ISCT: ISCT;
  MT: MT;
  SCT: SCT;
  SWIFT: SWIFT;
}

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
   * @default "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}"
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
  status?: Status1C5Enum;
  /**
   * A two-letter country code (ISO 639-1)
   * @maxLength 5
   */
  user_language?: string;
}

export enum Status1C5Enum {
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

export interface T2P {
  /** Creditor account */
  creditor_object: CreditorAccountWrite;
  /**
   * Payment end to end identification.
   * Payment Custom Payment ID
   * @maxLength 35
   */
  custom_payment_id?: string;
  /**
   * Payment description
   * @default "GOCARDLESS"
   */
  description?: string;
  /** Instructed amount */
  instructed_amount: InstructedAmount;
  /**
   * Link to initiate authorization with Institution
   * @format uri
   * @default "https://ob.nordigen.com/pis/start/1b1b329f-a654-4ed3-b244-8245de396aa8/{$INSTITUTION_ID}"
   */
  link?: string;
  /** Payment ID */
  payment_id?: string;
  /**
   * Payment product
   *
   * * `T2P` - target-2-payments
   * * `SCT` - sepa-credit-transfers
   * * `ISCT` - instant-sepa-credit-transfer
   * * `CBCT` - cross-border-credit-transfers
   * * `BACS` - Back Payment Scheme
   * * `CHAPS` - CHAPS Payment Scheme
   * * `FPS` - Faster Payment Scheme
   * * `SWIFT` - Swift Payment Service
   * * `BT` - Balance Transfer
   * * `MT` - Money Transfer
   * * `DCT` - domestic-credit-transfer
   * * `IDCT` - instant-domestic-credit-transfer
   * @default "ISCT"
   */
  payment_product?: PaymentProductEnum;
  /**
   * Payment end to end identification
   *
   * * `INIT` - Initiated. Payment has been initiated.
   * * `ERRE` - ExecutionError. We experienced error on payment execution.
   * * `ERRS` - StatusError. We experienced error retrieving payment status. Try again.
   * * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed
   * * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful
   * * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed
   * * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution
   * * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful
   * * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent
   * * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account
   * * `RCVD` - Received. Payment initiation has been received by the receiving agent
   * * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed
   * * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected.
   * * `CANC` - Cancelled. Payment initiation has been cancelled before execution
   * * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive
   * * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed
   * * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status
   */
  payment_status?: PaymentStatusEnum;
  /**
   * Payment Type
   *
   * * `single-payment` - payment
   * * `bulk-payment` - bulk-payments
   * * `periodic-payment` - periodic-payments
   */
  payment_type?: PaymentTypeEnum;
  /**
   * Redirect URL to your application after payment is done
   * @format uri
   * @maxLength 1024
   */
  redirect: string | null;
  /**
   * Payment Execution date (for periodic payments)
   * @format date
   */
  requested_execution_date?: string;
  /**
   * Indicates whether payment should be submitted separately
   * @default false
   */
  submit_payment?: boolean;
}

export interface TransactionAmountSchema {
  /** amount */
  amount: string;
  /** currency */
  currency: string;
}

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

/**
 * * `IBAN` - IBAN
 * * `SCAN` - SortCodeAccountNumber
 * * `BBAN` - BBAN
 */
export enum TypeEnum {
  IBAN = "IBAN",
  SCAN = "SCAN",
  BBAN = "BBAN",
}
