import type { NordigenClient } from "../NordigenClient.js";
import type {
  PaginatedRequisitionList,
  RequisitionByIdData,
  RequisitionRequest,
  RetrieveAllRequisitionsData,
  RetrieveAllRequisitionsParams,
  SpectacularRequisition,
} from "../generated.js";
import type { HasDetail, WithClient } from "../types/client.js";
import { HttpMethod } from "../HttpMethod.js";
import { RequisitionCreateOptions } from "../types/requisition.js";

export class RequisitionsApi {
  private readonly endpoint = "requisitions";

  private readonly client: NordigenClient;

  /**
   * Agreements api class
   * @param {WithClient} params
   */
  constructor({ client }: WithClient) {
    this.client = client;
  }

  /**
   * Create requisition. For creating links and retrieving accounts.
   * @param {RequisitionCreateOptions} params
   * @returns {Promise<SpectacularRequisition>} Requisition object
   */
  createRequisition({
    redirectUrl,
    institutionId,
    agreement,
    userLanguage,
    redirectImmediate = false,
    accountSelection = false,
    reference = null,
    ssn = null,
  }: RequisitionCreateOptions): Promise<SpectacularRequisition> {
    const payload: RequisitionRequest = {
      redirect: redirectUrl,
      institution_id: institutionId,
      redirect_immediate: redirectImmediate,
      account_selection: accountSelection,
      ...(userLanguage && { user_language: userLanguage }),
      ...(agreement && { agreement: typeof agreement === "string" ? agreement : agreement.id }),
      ...(ssn && { ssn: ssn }),
      ...(reference && { reference: reference }),
    };

    return this.client.request<SpectacularRequisition, RequisitionRequest>({
      endpoint: `${this.endpoint}/`,
      parameters: payload,
      method: HttpMethod.POST,
    });
  }

  /**
   * Get all requisitions
   * @param {RetrieveAllRequisitionsParams} params
   * @returns {Promise<PaginatedRequisitionList>} Requisitions object
   */
  getRequisitions({ limit = 100, offset = 0 }: RetrieveAllRequisitionsParams = {}): Promise<PaginatedRequisitionList> {
    const params: RetrieveAllRequisitionsParams = { limit, offset };

    return this.client.request<RetrieveAllRequisitionsData, RetrieveAllRequisitionsParams>({
      endpoint: this.endpoint,
      method: HttpMethod.GET,
      parameters: params,
    });
  }

  /**
   * Get requisition by id
   * @param {string} requisitionId
   * @returns {Promise<RequisitionByIdData>} Returns specific requisition
   */
  getRequisitionById(requisitionId: string): Promise<RequisitionByIdData> {
    return this.client.request<RequisitionByIdData>({
      endpoint: `${this.endpoint}/${requisitionId}/`,
    });
  }

  /**
   * Delete requisition by id
   * @param {string} requisitionId
   * @returns {HasDetail} Object that consist confirmation message that requisition has been deleted
   */
  deleteRequisition(requisitionId: string): Promise<HasDetail> {
    return this.client.request<HasDetail>({
      endpoint: `${this.endpoint}/${requisitionId}/`,
      method: HttpMethod.DELETE,
    });
  }
}
