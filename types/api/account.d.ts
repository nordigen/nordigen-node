export default class AccountApi {
    /**
     * Account api class
     * @param {NordigenClient} client
     * @param {str} accountId
    */
    constructor({ client, accountId }: NordigenClient);
    /**
     * Access account metadata
     * @returns Account metadata object
     */
    getMetadata(): any;
    /**
     * Access account details
     * @returns Object with account details
     */
    getDetails(): any;
    /**
     * Access account balances
     * @returns Object with account balances
     */
    getBalances(): any;
    /**
     * @param {str} dateFrom
     * @param {str} dateTo
     * Access account transactions
     * @returns Object with account transactions
     */
    getTransactions(date: any): any;
    #private;
}
//# sourceMappingURL=account.d.ts.map