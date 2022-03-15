export default class RequisitionsApi {
    /**
     * Requisitions api class
     * @param {NordigenClient} client
    */
    constructor({ client }: NordigenClient);
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
    createRequisition({ redirectUrl, institutionId, agreement, userLanguage, reference }: string): any;
    /**
     * Get all requisitions
     * @param {number} limit number of results to return per page. Defaults to 100.
     * @param {number} offset the initial index from which to return the results. Defaults to 0.
     * @returns Requisitions object
     */
    getRequisitions({ limit, offset }?: number): any;
    /**
     * Get requisition by id
     * @param {string} requisitionId
     * @returns Returns specific requisition
     */
    getRequisitionById(requisitionId: string): any;
    /**
     * Delete requisition by id
     * @param {string} requisitionId
     * @returns Object that consist confirmation message that requisition has been deleted
     */
    deleteRequisition(requisitionId: string): any;
    #private;
}
//# sourceMappingURL=requisition.d.ts.map