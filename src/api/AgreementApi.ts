import type { NordigenClient } from "../NordigenClient.js";
import type {
  AcceptEuaData,
  CreateEuaData,
  EndUserAgreementRequest,
  EnduserAcceptanceDetailsRequest,
  RetrieveAllEuAsForAnEndUserData,
  RetrieveAllEuAsForAnEndUserParams,
  RetrieveEuaByIdData,
} from "../generated.js";
import type { AgreementAcceptPraams as AgreementAcceptParams, AgreementCreateParams } from "../types/agreement.js";
import type { HasDetail, WithClient } from "../types/client.js";
import { HttpMethod } from "../HttpMethod.js";

export class AgreementApi {
  private readonly endpoint = "agreements/enduser";

  private readonly client: NordigenClient;

  /**
   * Agreements api class
   * @param {WithClient} params
   */
  constructor({ client }: WithClient) {
    this.client = client;
  }

  /**
   * Create enduser agreement
   * @param {AgreementCreateParams} params
   * @returns {Promise<CreateEuaData>} Agreement object
   */
  createAgreement({
    institutionId,
    maxHistoricalDays = 90,
    accessValidForDays = 90,
    accessScope = ["balances", "details", "transactions"],
  }: AgreementCreateParams): Promise<CreateEuaData> {
    const payload: EndUserAgreementRequest = {
      institution_id: institutionId,
      max_historical_days: maxHistoricalDays,
      access_valid_for_days: accessValidForDays,
      access_scope: accessScope,
    };

    return this.client.request<CreateEuaData, EndUserAgreementRequest>({
      endpoint: `${this.endpoint}/`,
      parameters: payload,
      method: HttpMethod.POST,
    });
  }

  /**
   * Get list of agreements
   * @param {RetrieveAllEuAsForAnEndUserParams} params
   * @returns {Promise<RetrieveAllEuAsForAnEndUserData>} End user agreements
   */
  getAgreements({ limit = 100, offset = 0 }: RetrieveAllEuAsForAnEndUserParams = {}): Promise<RetrieveAllEuAsForAnEndUserData> {
    const params: RetrieveAllEuAsForAnEndUserParams = { limit, offset };

    return this.client.request<RetrieveAllEuAsForAnEndUserData, RetrieveAllEuAsForAnEndUserParams>({
      endpoint: `${this.endpoint}/`,
      parameters: params,
    });
  }

  /**
   * Get agreement by agreement id
   * @param {string} agreementId
   * @returns {Promise<RetrieveEuaByIdData>} object with specific enduser agreement
   */
  getAgreementById(agreementId: string): Promise<RetrieveEuaByIdData> {
    return this.client.request<RetrieveEuaByIdData>({
      endpoint: `${this.endpoint}/${agreementId}/`,
    });
  }

  /**
   * Delete enduser agreement
   * @param {string} agreementId
   * @returns {Promise<HasDetail>} Deleted agreement object
   */
  deleteAgreement(agreementId: string): Promise<HasDetail> {
    return this.client.request<HasDetail>({
      endpoint: `${this.endpoint}/${agreementId}/`,
      method: HttpMethod.DELETE,
    });
  }

  /**
   * Accept End user agreement
   * @param {AgreementAcceptParams} params
   * @returns {Promise<AcceptEuaData>} Information on accepted agreement
   */
  acceptAgreement({ agreementId, ip, userAgent }: AgreementAcceptParams): Promise<AcceptEuaData> {
    const payload: EnduserAcceptanceDetailsRequest = {
      user_agent: userAgent,
      ip_address: ip,
    };

    return this.client.request<AcceptEuaData, EnduserAcceptanceDetailsRequest>({
      endpoint: `${this.endpoint}/${agreementId}/accept/`,
      parameters: payload,
      method: HttpMethod.PUT,
    });
  }
}
