import {
    AccountApi,
    AgreementApi,
    InstitutionApi,
    RequisitionsApi,
} from './api/index.js';
import { HttpMethod } from './httpMethod.js';
import { filterObject } from './utils.js';
import axios from 'axios';

export default class NordigenClient {
    #endpoint = 'token';
    #token = null;

    /**
     *
     * @param {Object} params
     * @param {string} params.secretId
     * @param {string} params.secretKey
     */
    constructor({
        secretId,
        secretKey,
        baseUrl = 'https://ob.nordigen.com/api/v2',
    }) {
        this.baseUrl = baseUrl;
        this.secretKey = secretKey;
        this.secretId = secretId;
        this.headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Nordigen-Node-v2',
        };
        this.institution = new InstitutionApi({ client: this });
        this.agreement = new AgreementApi({ client: this });
        this.requisition = new RequisitionsApi({ client: this });
    }

    /**
     * Token setter
     * @param {string} token
     */
    set token(token) {
        this.#token = token;
        this.headers['Authorization'] = `Bearer ${token}`;
    }

    /**
     * Token getter
     * @returns {string} token
     */
    get token() {
        return this.#token;
    }

    /**
     * Construct Account object
     * @param {string} accountId
     * @returns {AccountApi}
     */
    account(accountId) {
        return new AccountApi({ client: this, accountId: accountId });
    }

    /**
     * Request wrapper
     * @param {Object} params
     * @param {string} params.endpoint API endpoint
     * @param {string} params.parameters for Post or Get request
     * @param {HttpMethod} [params.method] HTTP method
     * @returns Request object
     */
    async request({ endpoint, parameters, method = HttpMethod.GET }) {
        const url = new URL(`${this.baseUrl}/${endpoint}`);
        const validParams = filterObject(parameters);

        if (method === HttpMethod.GET && Object.keys(validParams).length > 0) {
            url.search = new URLSearchParams(validParams);
        }

        const response = await axios({
            method,
            url,
            headers: this.headers,
            ...(method !== HttpMethod.GET
                ? { data: JSON.stringify(parameters) }
                : {}),
        });

        return response.data;
    }

    /**
     * Generate new access token
     * @returns Object with token details
     */
    async generateToken() {
        const payload = {
            secret_key: this.secretKey,
            secret_id: this.secretId,
        };

        const response = await this.request({
            endpoint: `${this.#endpoint}/new/`,
            parameters: payload,
            method: HttpMethod.POST,
        });
        this.headers['Authorization'] = `Bearer ${response.access}`;
        return response;
    }

    /**
     * Exchange refresh token for access token
     * @param {Object} params
     * @param {string} params.refreshToken
     * @returns Object with new access token
     */
    exchangeToken({ refreshToken }) {
        const payload = { refresh: refreshToken };
        const response = this.request({
            endpoint: `${this.#endpoint}/refresh/`,
            parameters: payload,
            method: HttpMethod.POST,
        });

        return response;
    }

    /**
     * Factory method that creates authorization in a specific institution
        and are responsible for the following steps:
            * Gets institution id;
            * Creates agreement
            * Creates requisiton
     * @param {Object} params
     * @param {string} params.redirectUrl
     * @param {string} params.institutionId
     * @param {string} params.referenceId
     * @param {number} params.maxHistoricalDays
     * @param {number} params.accessValidForDays
     * @param {string} params.userLanguage
     * @param {string} params.ssn
     * @param {boolean} params.redirectImmediate
     * @param {boolean} params.accountSelection
     *
     * @returns Requisitions object
    */
    async initSession({
        redirectUrl,
        institutionId,
        referenceId,
        maxHistoricalDays = 90,
        accessValidForDays = 90,
        userLanguage = 'en',
        ssn = null,
        redirectImmediate = false,
        accountSelection = false,
    }) {
        // Create agreement
        const agreement = await this.agreement.createAgreement({
            maxHistoricalDays: maxHistoricalDays,
            institutionId: institutionId,
        });

        // Create new requisition
        const requisition = await this.requisition.createRequisition({
            redirectUrl: redirectUrl,
            institutionId: institutionId,
            reference: referenceId,
            agreement: agreement.id,
            userLanguage: userLanguage,
            redirectImmediate: redirectImmediate,
            accountSelection: accountSelection,
            ssn: ssn,
        });

        return requisition;
    }
}
