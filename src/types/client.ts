import type { HttpMethod } from "../HttpMethod.js";
import type { NordigenClient } from "../NordigenClient.js";
import type { CountryEnum } from "./enums.js";
import type { AgreementCreateParams } from "./agreement.js";
import type { RequisitionCreateOptions } from "./requisition.js";

export type HttpMethodType = typeof HttpMethod;

export interface NordigenClientOptions {
  secretId: string;
  secretKey: string;
  baseUrl?: string;
}

export interface RequestWrapperOptions<T> {
  endpoint: string;
  parameters?: T;
  method?: HttpMethodType[keyof HttpMethodType];
}

export interface ExchangeTokenOptions {
  refreshToken: string;
}

export interface InitSessionOptions extends AgreementCreateParams, Omit<RequisitionCreateOptions, "reference" | "agreement"> {
  referenceId: string;
}

export interface WithClient {
  client: NordigenClient;
}

export interface DateFilter {
  dateFrom?: string;
  dateTo?: string;
}

export interface Country {
  id: CountryEnum;
  name: string;
}

export interface HasDetail {
  detail: string;
}
