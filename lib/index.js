import {
    AccountApi,
    AgreementApi,
    InstitutionApi,
    RequisitionsApi
} from "./api/index.js";
import { HttpMethod } from "./httpMethod.js";

import fetch from "node-fetch";

export default class NordigenClient {

    #endpoint = "token";
    #token = null;

    /**
     *
     * @param {string} secretId
     * @param {string} secretKey
     */
    constructor({secretId, secretKey}) {
        this.baseUrl = `https://ob.nordigen.com/api/v2`;
        this.secretKey = secretKey;
        this.secretId =  secretId;
        this.headers = {
            "accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Nordigen-Node-v2"
        };
        this.institution = new InstitutionApi({client: this});
        this.agreement = new AgreementApi({client: this});
        this.requisition = new RequisitionsApi({client: this});
    }

    /**
     * Token setter
     * @param {string} token
    */
    set setToken(token) {
        this.token = token
        this.headers["Authorization"] = `Bearer ${token}`;
    }

    /**
     * Token getter
     * @returns {string} token
    */
    get getToken() {
        return this.token
    }

    /**
     * Construct Account object
     * @param {string} accountId
     * @returns {AccountApi}
     */
    account(accountId) {
        return new AccountApi({client: this, accountId: accountId});
    }

    /**
     * Request wrapper
     * @param {string} endpoint API endpoint
     * @param {string} parameters for Post or Get request
     * @param {HttpMethod} method HTTP method
     * @returns Request object
    */
    async request({endpoint, params, method = HttpMethod.GET}) {

        const url = new URL(`${this.baseUrl}/${endpoint}`);

        if(method === HttpMethod.GET && params) {
            url.search = new URLSearchParams(params);
        }

        const response = await fetch(url, {
            method,
            headers: this.headers,
            ...(method !== HttpMethod.GET ? { body: JSON.stringify(params) } : {}),
        })

        return response.json();
    }

    /**
     * Generate new access token
     * @returns Object with token details
    */
    async generateToken() {
        const payload = {
            "secret_key": this.secretKey,
            "secret_id": this.secretId
        }

        const response = await this.request({
            endpoint: `${this.#endpoint}/new/`,
            params: payload,
            method: HttpMethod.POST
        });

        this.headers["Authorization"] = `Bearer ${response.access}`;
        return response;
    }

    /**
     * Exchange refresh token for access token
     * @param {string} refreshToken
     * @returns Object with new access token
    */
    exchangeToken({refreshToken}) {
        const payload = {"refresh": refreshToken};
        const response = this.request({
            endpoint: `${this.#endpoint}/refresh/`,
            params: payload,
            method: HttpMethod.POST
        })

        return response;
    }

    /**
     * Factory method that creates authorization in a specific institution
        and are responsible for the following steps:
            * Gets institution id;
            * Creates agreement
            * Creates requisiton
     * @returns Requisitions object
    */
    async initSession({redirectUrl, institutionId, referenceId, maxHistoricalDays = 90}) {
        // Create agreement
        const agreement = await this.agreement.createAgreement({
            maxHistoricalDays: maxHistoricalDays,
            institutionId: institutionId
        });

        // Create new requisition
        const requisition = await this.requisition.createRequisition({
            redirectUrl: redirectUrl,
            institutionId: institutionId,
            reference: referenceId,
            agreement: agreement.id
        });

        return requisition;
    }

}
