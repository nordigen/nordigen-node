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
     * @returns Account data object
     */
    #get(path) {
        const url = `${this.#endpoint}/${this.#accountId}/${path}`;
        return this.#client.request({endpoint: url});
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
     * Access account transactions
     * @returns Object with account transactions
     */
    getTransactions() {
        return this.#get("transactions");
    }
}
