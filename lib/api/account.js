export default class AccountApi {

    #endpoint = "accounts";
    #client = null;
    #accountId;

    /**
     * Account api class
     * @param {NordigenClient} client
     * @param {str} accountId
    */
    constructor({client, accountId}) {
        this.#client = client;
        this.#accountId = accountId
    }

    /**
     * Construct reusable get request
     * @param {str} path api endpoint
     * @param {object} additional parameters
     * @returns Account data object
     */
    #get(path, parameters = {}) {
        const url = `${this.#endpoint}/${this.#accountId}/${path}`;
        return this.#client.request({endpoint: url, params: parameters});
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
     * @param {str} dateFrom
     * @param {str} dateTo
     * Access account transactions
     * @returns Object with account transactions
     */
    getTransactions(date) {
        const {dateFrom, dateTo} = date || {};
        const dateRange = {
            "date_from": dateFrom,
            "date_to": dateTo
        }
        return this.#get("transactions", dateRange);
    }
}
