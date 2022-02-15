import {HttpMethod} from "../httpMethod.js";

export default class AgreementApi {

    #endpoint = "agreements/enduser";
    #client = null;

    /**
     * Agreements api class
     * @param {NordigenClient} client
     * @param {string} institution_id
    */
    constructor({client}) {
        this.#client = client;
    }

    /**
     * Create enduser agreement
     * @param {string} institutionId Institutions ID.
     * @param {number} maxHistoricalDays Length of the transaction history. Defaults to 90.
     * @param {number} accessValidForDays access valid for days.
     * @param {Array} accessScope access scope for account, by default provides access to
                            balances, details and transactions.
     * @returns Agreement object
     */
    createAgreement({institutionId, maxHistoricalDays = 90, accessValidForDays = 90, accessScope = [
        "balances",
        "details",
        "transactions"
    ]}) {

        const payload = {
            "institution_id": institutionId,
            "max_historical_days": maxHistoricalDays,
            "access_valid_for_days": accessValidForDays,
            "access_scope": accessScope,
        };

        return this.#client.request({
            endpoint: `${this.#endpoint}/`,
            parameters: payload,
            method: HttpMethod.POST
        });
    }

    /**
     * Get list of agreements
     * @param {number} limit number of results to return per page. Defaults to 100.
     * @param {number} offset the initial index from which to return the results. Defaults to 0.
     * @returns End user agreements
    */
    getAgreements({limit = 100, offset = 0} = {}) {
        const params = {limit, offset};

        return this.#client.request({
            endpoint: `${this.#endpoint}/`,
            parameters: params
        });
    }

    /**
     * Get agreement by agreement id
     * @param {string} agreementId
     * @returns object with specific enduser agreement
     */
    getAgreementById(agreementId) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${agreementId}/`
        });
    }

    /**
     * Delete enduser agreement
     * @param {string} agreementId
     * @returns Deleted agreement object
     */
    deleteAgreement(agreementId) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${agreementId}/`,
            method: HttpMethod.DELETE
        });
    }

    /**
     * Accept End user agreement
     * @param {string} agreementId
     * @param {string} ip
     * @param {string} userAgent
     * @returns Information on accepted agreement
     */
    acceptAgreement({agreementId: agreementId, ip, userAgent}) {
        const payload = {
            'user_agent': userAgent,
            'ip_address': ip
        }

        return this.#client.request({
            endpoint: `${this.#endpoint}/${agreementId}/accept/`,
            params: payload,
            method: HttpMethod.PUT
        });
    }
}
