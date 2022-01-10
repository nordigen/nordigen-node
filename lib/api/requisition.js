import {HttpMethod} from "../httpMethod.js";

export default class RequisitionsApi {

    #endpoint = "requisitions";
    #client = null;

    /**
     * Requisitions api class
     * @param {NordigenClient} client 
    */
    constructor({client}) {
        this.#client = client;
    }

    /**
     * Create requisition. For creating links and retrieving accounts.
     * @param {string} redirectUrl application redirect url
     * @param {string} institutionId institution id
     * @param {string} agreement agreement id
     * @param {string} userLanguage to enforce a language for all end user steps hosted
                by Nordigen passed as a two-letter country code. Defaults to None
     * @param {string} reference additional layer of unique ID defined by yo
     * @returns Requisition object
    */
    createRequisition({
        redirectUrl,
        institutionId,
        agreement,
        userLanguage,
        reference
    }) {
        const payload = {
            "redirect": redirectUrl,
            "reference": reference,
            "institution_id": institutionId,
            ...(userLanguage && {"user_language": userLanguage}),
            ...(agreement && {"agreement": agreement})
        };

        return this.#client.request({
            endpoint: `${this.#endpoint}/`,
            params: payload,
            method: HttpMethod.POST
        })
    }

    /**
     * Get all requisitions
     * @param {number} limit number of results to return per page. Defaults to 100.
     * @param {number} offset the initial index from which to return the results. Defaults to 0.
     * @returns Requisitions object
     */
    getRequisitions({limit = 100, offset = 0} = {}) {
        const params = {limit, offset};
        return this.#client.request({
            endpoint: `${this.#endpoint}/`,
            method: HttpMethod.GET,
            params: params,
        })
    }

    /**
     * Get requisition by id
     * @param {string} requisitionId 
     * @returns Returns specific requisition
     */
    getRequisitionById(requisitionId) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${requisitionId}/`
        })
    }

    /**
     * Delete requisition by id
     * @param {string} requisitionId 
     * @returns Object that consist confirmation message that requisition has been deleted
     */
    deleteRequisition(requisitionId) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${requisitionId}/`,
            method: HttpMethod.DELETE
        })
    }


}
