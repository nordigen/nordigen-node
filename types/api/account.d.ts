export default class AccountApi {
    /**
     * Account api class
     * @param {Object} params
     * @param {NordigenClient} params.client
     * @param {string} params.accountId
     */
    constructor({ client, accountId }: {
        client: NordigenClient;
        accountId: string;
    });
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
     * Access premium account details
     * @param {string} country parameter in iso format
     * @returns Object with premium account details
     */
    getPremiumDetails(country?: string): any;
    /**
     * Access account balances
     * @returns Object with account balances
     */
    getBalances(): any;
    /**
     * @param {Object} [params]
     * @param {string} params.dateFrom
     * @param {string} params.dateTo
     * @param {string} params.country
     * Access account transactions
     * @returns Object with account transactions
     */
    getTransactions({ dateFrom, dateTo }?: {
        dateFrom: string;
        dateTo: string;
        country: string;
    }, country?: string): any;
    /**
     * @param {Object} [params]
     * @param {string} params.dateFrom
     * @param {string} params.dateTo
     * Access premium account transactions
     * @returns Object with premium account transactions
     */
    getPremiumTransactions({ dateFrom, dateTo, country }?: {
        dateFrom: string;
        dateTo: string;
        country?: string;
    }): any;
    #private;
}
import NordigenClient from "../index.js";
//# sourceMappingURL=account.d.ts.map
