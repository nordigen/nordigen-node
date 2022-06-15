export default class AccountApi {

    #endpoint = "accounts";
    #client = null;
    #accountId;

    /**
     * Account api class
     * @param {Object} params
     * @param {NordigenClient} params.client
     * @param {string} params.accountId
    */
    constructor({client, accountId}) {
        this.#client = client;
        this.#accountId = accountId
    }

    /**
     * Construct reusable get request
     * @param {string} path api endpoint
     * @param {object} [parameters] parameters
     * @returns Account data object
     */
    #get(path, parameters = {}) {
        const url = `${this.#endpoint}/${this.#accountId}/${path}`;
        return this.#client.request({endpoint: url, parameters: parameters});
    }

    /**
     * Access account metadata
     * @returns Account metadata object
     */
    getMetadata() {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${this.#accountId}`
        })
    }

    /**
     * Access account details
     * @returns Object with account details
     */
    getDetails() {
        return this.#get("details");
    }

    /**
     * Access account balances
     * @returns Object with account balances
     */
    getBalances() {
      return this.#get("balances");
    }

    /**
     * @param {Object} [params]
     * @param {string} params.dateFrom
     * @param {string} params.dateTo
     * Access account transactions
     * @returns Object with account transactions
     */
    getTransactions({dateFrom, dateTo} = {}) {
        const dateRange = {
            "date_from": dateFrom,
            "date_to": dateTo
        }
        return this.#get("transactions", dateRange);
    }
}
