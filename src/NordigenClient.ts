import axios from "axios";
import { HttpMethod } from "./HttpMethod.js";
import { filterObject } from "./utils.js";
import { ExchangeTokenOptions, InitSessionOptions, NordigenClientOptions, RequestWrapperOptions } from "./types/client.js";
import {
  JWTObtainPairRequest,
  JWTRefreshRequest,
  SpectacularJWTObtain,
  SpectacularJWTRefresh,
  SpectacularRequisition,
} from "./generated.js";
import { InstitutionApi } from "./api/InstitutionApi.js";
import { AgreementApi } from "./api/AgreementApi.js";
import { RequisitionsApi } from "./api/RequisitionsApi.js";
import { AccountApi } from "./api/AccountApi.js";

export class NordigenClient {
  private readonly endpoint = "token";

  private _token: string | null = null;

  private readonly baseUrl: string;

  private readonly secretId: string;

  private readonly secretKey: string;

  private headers: Record<string, string> = {};

  public institution: InstitutionApi;

  public agreement: AgreementApi;

  public requisition: RequisitionsApi;

  constructor({ secretId, secretKey, baseUrl = "https://bankaccountdata.gocardless.com/api/v2" }: NordigenClientOptions) {
    this.baseUrl = baseUrl;
    this.secretKey = secretKey;
    this.secretId = secretId;
    this.headers = {
      "accept": "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Nordigen-Node-v2",
    };
    this.institution = new InstitutionApi({ client: this });
    this.agreement = new AgreementApi({ client: this });
    this.requisition = new RequisitionsApi({ client: this });
  }

  /**
   * Token setter
   * @param {string|null} token
   */
  set token(token: string | null) {
    this._token = token;

    if (!token) {
      delete this.headers["Authorization"];
      return;
    }

    this.headers["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Token getter
   * @returns {string|null} token
   */
  get token(): string | null {
    return this._token;
  }

  /**
   * Construct Account object
   * @param {string} accountId
   * @returns {AccountApi}
   */
  account(accountId: string): AccountApi {
    return new AccountApi({ client: this, accountId: accountId });
  }

  /**
   * Request wrapper
   * @template T
   * @template P
   * @param {RequestWrapperOptions<P>} params
   * @returns {Promise<T>} Request object
   */
  async request<T = unknown, P = unknown>({ endpoint, parameters, method = HttpMethod.GET }: RequestWrapperOptions<P>): Promise<T> {
    const url = new URL(`${this.baseUrl}/${endpoint}`);
    const validParams = filterObject(parameters as any);

    if (method === HttpMethod.GET && Object.keys(validParams).length > 0) {
      url.search = new URLSearchParams(validParams).toString();
    }

    const response = await axios({
      method,
      url: url.toString(),
      headers: this.headers,
      ...(method !== HttpMethod.GET ? { data: JSON.stringify(parameters) } : {}),
    });

    return response.data;
  }

  /**
   * Generate new access token
   * @returns {Promise<SpectacularJWTObtain>} Object with token details
   */
  async generateToken(): Promise<SpectacularJWTObtain> {
    const payload = {
      secret_key: this.secretKey,
      secret_id: this.secretId,
    };

    const response = await this.request<SpectacularJWTObtain, JWTObtainPairRequest>({
      endpoint: `${this.endpoint}/new/`,
      parameters: payload,
      method: HttpMethod.POST,
    });

    this.token = response?.access ?? null;

    return response;
  }

  /**
   * Exchange refresh token for access token
   * @param {ExchangeTokenOptions} params
   * @returns {Promise<SpectacularJWTRefresh>} Object with new access token
   */
  async exchangeToken({ refreshToken }: ExchangeTokenOptions): Promise<SpectacularJWTRefresh> {
    const payload: JWTRefreshRequest = { refresh: refreshToken };

    const response = await this.request<SpectacularJWTRefresh, JWTRefreshRequest>({
      endpoint: `${this.endpoint}/refresh/`,
      parameters: payload,
      method: HttpMethod.POST,
    });

    return response;
  }

  /**
   * Factory method that creates authorization in a specific institution
   * -   and are responsible for the following steps:
   *       * Gets institution id;
   *       * Creates agreement
   *       * Creates requisiton
   *
   * @param {InitSessionOptions} params
   * @returns {Promise<SpectacularRequisition>} Requisitions object
   */
  async initSession({
    redirectUrl,
    institutionId,
    maxHistoricalDays = 90,
    // accessValidForDays = 90,
    userLanguage = "en",
    referenceId,
    ssn = null,
    redirectImmediate = false,
    accountSelection = false,
  }: InitSessionOptions): Promise<SpectacularRequisition> {
    // Create agreement
    const agreement = await this.agreement.createAgreement({
      maxHistoricalDays: maxHistoricalDays,
      institutionId: institutionId,
    });

    // Create new requisition
    const requisition = await this.requisition.createRequisition({
      redirectUrl: redirectUrl,
      institutionId: institutionId,
      reference: referenceId,
      agreement,
      userLanguage: userLanguage,
      redirectImmediate: redirectImmediate,
      accountSelection: accountSelection,
      ssn: ssn,
    });

    return requisition;
  }
}
