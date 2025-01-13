export type AccessScope = "balances" | "transactions" | "details";

export interface AgreementCreateParams {
  institutionId: string;
  maxHistoricalDays?: number;
  accessValidForDays?: number;
  accessScope?: AccessScope[];
}

export interface AgreementAcceptPraams {
  agreementId: string;
  ip: string;
  userAgent: string;
}
