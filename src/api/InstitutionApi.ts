import type {
  RetrieveAllSupportedInstitutionsInAGivenCountryData,
  RetrieveAllSupportedInstitutionsInAGivenCountryParams,
  RetrieveInstitutionData,
} from "../generated.js";
import type { NordigenClient } from "../NordigenClient.js";
import type { WithClient } from "../types/client.js";

export class InstitutionApi {
  private readonly endpoint: string = "institutions";

  private readonly client: NordigenClient;

  /**
   * Agreements api class
   * @param {WithClient} params
   */
  constructor({ client }: WithClient) {
    this.client = client;
  }

  /**
   * Get list of institutions
   * @param {RetrieveAllSupportedInstitutionsInAGivenCountryParams} params
   * @returns {Promise<RetrieveAllSupportedInstitutionsInAGivenCountryData>} institution data array
   */
  getInstitutions({
    country,
  }: RetrieveAllSupportedInstitutionsInAGivenCountryParams): Promise<RetrieveAllSupportedInstitutionsInAGivenCountryData> {
    return this.client.request<RetrieveAllSupportedInstitutionsInAGivenCountryData, RetrieveAllSupportedInstitutionsInAGivenCountryParams>({
      endpoint: this.endpoint,
      parameters: {
        country,
      },
    });
  }

  /***
   * Get single institution by id
   * @param {string} id
   * @returns {Promise<RetrieveInstitutionData>} single institution data
   */
  getInstitutionById(id: string): Promise<RetrieveInstitutionData> {
    return this.client.request<RetrieveInstitutionData>({ endpoint: `${this.endpoint}/${id}/` });
  }
}
