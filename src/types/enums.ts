export enum AccountStatusEnum {
  DISCOVERED = "DISCOVERED",
  PROCESSING = "PROCESSING",
  READY = "READY",
  ERROR = "ERROR",
  SUSPENDED = "SUSPENDED",
}

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

export enum ExecutionRuleEnum {
  Following = "following",
  Preceding = "preceding",
}

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

export enum PaymentTypeEnum {
  SinglePayment = "single-payment",
  BulkPayment = "bulk-payment",
  PeriodicPayment = "periodic-payment",
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

export enum TypeEnum {
  IBAN = "IBAN",
  SCAN = "SCAN",
  BBAN = "BBAN",
}
