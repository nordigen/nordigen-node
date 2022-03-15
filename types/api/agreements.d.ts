export default class AgreementApi {
    /**
     * Agreements api class
     * @param {NordigenClient} client
     * @param {string} institution_id
    */
    constructor({ client }: NordigenClient);
    /**
     * Create enduser agreement
     * @param {string} institutionId Institutions ID.
     * @param {number} maxHistoricalDays Length of the transaction history. Defaults to 90.
     * @param {number} accessValidForDays access valid for days.
     * @param {Array} accessScope access scope for account, by default provides access to
                            balances, details and transactions.
     * @returns Agreement object
     */
    createAgreement({ institutionId, maxHistoricalDays, accessValidForDays, accessScope }: string): any;
    /**
     * Get list of agreements
     * @param {number} limit number of results to return per page. Defaults to 100.
     * @param {number} offset the initial index from which to return the results. Defaults to 0.
     * @returns End user agreements
    */
    getAgreements({ limit, offset }?: number): any;
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
     * @param {string} agreementId
     * @param {string} ip
     * @param {string} userAgent
     * @returns Information on accepted agreement
     */
    acceptAgreement({ agreementId: agreementId, ip, userAgent }: string): any;
    #private;
}
//# sourceMappingURL=agreements.d.ts.map