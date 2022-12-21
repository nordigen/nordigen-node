import { HttpMethod } from '../httpMethod.js';
import NordigenClient from '../index.js';

export default class RequisitionsApi {
    #endpoint = 'requisitions';
    #client = null;

    /**
     * Agreements api class
     * @param {Object} params
     * @param {NordigenClient} params.client
     */
    constructor({ client }) {
        this.#client = client;
    }

    /**
     * Create requisition. For creating links and retrieving accounts.
     * @param {Object} params
     * @param {string} params.redirectUrl application redirect url
     * @param {string} params.institutionId institution id
     * @param {string} [params.agreement] agreement id
     * @param {string} [params.userLanguage] to enforce a language for all end user steps hosted
                by Nordigen passed as a two-letter country code. Defaults to None
     * @param {string} params.reference additional layer of unique ID defined by yo
     * @param {string} params.ssn SSN number
     * @param {boolean} params.redirectImmediate enable redirect back to the client after account list received
     * @param {boolean} params.accountSelection option to enable account selection view for the end user
     * @returns Requisition object
    */
    createRequisition({
        redirectUrl,
        institutionId,
        agreement,
        userLanguage,
        reference,
        redirectImmediate,
        accountSelection,
        ssn,
    }) {
        const payload = {
            redirect: redirectUrl,
            reference: reference,
            institution_id: institutionId,
            ...(userLanguage && { user_language: userLanguage }),
            ...(agreement && { agreement: agreement }),
            ...(redirectImmediate && { redirectImmediate: redirectImmediate }),
            ...(accountSelection && { accountSelection: accountSelection }),
            ...(ssn && { ssn: ssn }),
        };

        return this.#client.request({
            endpoint: `${this.#endpoint}/`,
            parameters: payload,
            method: HttpMethod.POST,
        });
    }

    /**
     * Get all requisitions@param {Object} params
     * @param {Object} params
     * @param {number} [params.limit] number of results to return per page. Defaults to 100.
     * @param {number} [params.offset] the initial index from which to return the results. Defaults to 0.
     * @returns Requisitions object
     */
    getRequisitions({ limit = 100, offset = 0 } = {}) {
        const params = { limit, offset };
        return this.#client.request({
            endpoint: `${this.#endpoint}/`,
            method: HttpMethod.GET,
            parameters: params,
        });
    }

    /**
     * Get requisition by id
     * @param {string} requisitionId
     * @returns Returns specific requisition
     */
    getRequisitionById(requisitionId) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${requisitionId}/`,
        });
    }

    /**
     * Delete requisition by id
     * @param {string} requisitionId
     * @returns Object that consist confirmation message that requisition has been deleted
     */
    deleteRequisition(requisitionId) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${requisitionId}/`,
            method: HttpMethod.DELETE,
        });
    }
}
