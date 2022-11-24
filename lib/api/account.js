import NordigenClient from "../index.js";

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
    constructor({ client, accountId }) {
        this.#client = client;
        this.#accountId = accountId;
    }

    /**
     * Construct reusable get request
     * @param {string} path api endpoint
     * @param {object} [parameters] parameters
     * @returns Account data object
     */
    #get(path, parameters = {}) {
        const url = `${this.#endpoint}/${this.#accountId}/${path}`;
        return this.#client.request({ endpoint: url, parameters });
    }

    /**
     * Construct reusable premium get request
     * @param {string} path api endpoint
     * @param {object} [parameters] parameters
     * @returns Account data object
     */
    #getPremium(path, parameters = {}) {
        const url = `${this.#endpoint}/premium/${this.#accountId}/${path}`;
        return this.#client.request({ endpoint: url, parameters });
    }

    /**
     * Access account metadata
     * @returns Account metadata object
     */
    getMetadata() {
        return this.#client.request({
            endpoint: `${this.#endpoint}/${this.#accountId}`
        });
    }

    /**
     * Access account details
     * @returns Object with account details
     */
    getDetails() {
        return this.#get("details");
    }

    /**
     * Access premium account details
     * @param {string} country parameter in iso format
     * @returns Object with premium account details
     */
    getPremiumDetails(country = "") {
        const params = {
            country: country
        };
        return this.#getPremium("details", params);
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
     * @param {string} params.country
     * Access account transactions
     * @returns Object with account transactions
     */
    getTransactions({ dateFrom, dateTo } = {}, country = "") {
        const params = {
            date_from: dateFrom,
            date_to: dateTo,
            country: country
        };
        return this.#get("transactions", params);
    }

    /**
     * @param {Object} [params]
     * @param {string} params.dateFrom
     * @param {string} params.dateTo
     * Access premium account transactions
     * @returns Object with premium account transactions
     */
    getPremiumTransactions({ dateFrom, dateTo, country } = {}) {
        const params = {
            date_from: dateFrom,
            date_to: dateTo,
            country
        };
        return this.#getPremium("transactions", params);
    }
}
