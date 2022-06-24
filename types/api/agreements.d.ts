export default class AgreementApi {
    /**
     * Agreements api class
     * @param {Object} params
     * @param {NordigenClient} params.client
    */
    constructor({ client }: {
        client: NordigenClient;
    });
    /**
     * Create enduser agreement
     * @param {Object} params
     * @param {string} params.institutionId Institutions ID.
     * @param {number} [params.maxHistoricalDays] Length of the transaction history. Defaults to 90.
     * @param {number} [params.accessValidForDays] access valid for days. Defaults to 90.
     * @param {string[]} [params.accessScope access] scope for account, by default provides access to balances, details and transactions.
     * @returns Agreement object
     */
    createAgreement({ institutionId, maxHistoricalDays, accessValidForDays, accessScope }: {
        institutionId: string;
        maxHistoricalDays?: number;
        accessValidForDays?: number;
        accessScope?: string[];
    }): any;
    /**
     * Get list of agreements
     * @param {Object} params
     * @param {number} [params.limit] number of results to return per page. Defaults to 100.
     * @param {number} [params.offset] the initial index from which to return the results. Defaults to 0.
     * @returns End user agreements
    */
    getAgreements({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): any;
    /**
     * Get agreement by agreement id
     * @param {string} agreementId
     * @returns object with specific enduser agreement
     */
    getAgreementById(agreementId: string): any;
    /**
     * Delete enduser agreement
     * @param {string} agreementId
     * @returns Deleted agreement object
     */
    deleteAgreement(agreementId: string): any;
    /**
     * Accept End user agreement
     * @param {Object} params
     * @param {string} params.agreementId
     * @param {string} params.ip
     * @param {string} params.userAgent
     * @returns Information on accepted agreement
     */
    acceptAgreement({ agreementId, ip, userAgent }: {
        agreementId: string;
        ip: string;
        userAgent: string;
    }): any;
    #private;
}
import NordigenClient from "../index.js";
//# sourceMappingURL=agreements.d.ts.map