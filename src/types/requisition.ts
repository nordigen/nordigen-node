import { EndUserAgreement } from "../generated.js";

export interface RequisitionCreateOptions {
  redirectUrl: string;
  institutionId: string;
  agreement: EndUserAgreement | string;
  userLanguage?: string;
  redirectImmediate?: boolean;
  accountSelection?: boolean;
  reference?: string | null;
  ssn?: string | null;
}
