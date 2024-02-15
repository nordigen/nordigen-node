export default class NordigenClient {
    /**
     *
     * @param {Object} params
     * @param {string} params.secretId
     * @param {string} params.secretKey
     * @param {string} params.baseUrl
     */
    constructor({ secretId, secretKey, baseUrl, }: {
        secretId: string;
        secretKey: string;
        baseUrl: string;
    });
    baseUrl: string;
    secretKey: string;
    secretId: string;
    headers: {
        accept: string;
        'Content-Type': string;
        'User-Agent': string;
    };
    institution: InstitutionApi;
    agreement: AgreementApi;
    requisition: RequisitionsApi;
    /**
     * Token setter
     * @param {string} token
     */
    set token(arg: string);
    /**
     * Token getter
     * @returns {string} token
     */
    get token(): string;
    /**
     * Construct Account object
     * @param {string} accountId
     * @returns {AccountApi}
     */
    account(accountId: string): AccountApi;
    /**
     * Request wrapper
     * @param {Object} params
     * @param {string} params.endpoint API endpoint
     * @param {string} params.parameters for Post or Get request
     * @param {HttpMethod} [params.method] HTTP method
     * @returns Request object
     */
    request({ endpoint, parameters, method }: {
        endpoint: string;
        parameters: string;
        method?: HttpMethod;
    }): Promise<any>;
    /**
     * Generate new access token
     * @returns Object with token details
     */
    generateToken(): Promise<any>;
    /**
     * Exchange refresh token for access token
     * @param {Object} params
     * @param {string} params.refreshToken
     * @returns Object with new access token
     */
    exchangeToken({ refreshToken }: {
        refreshToken: string;
    }): Promise<any>;
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
    initSession({ redirectUrl, institutionId, maxHistoricalDays, accessValidForDays, userLanguage, referenceId, ssn, redirectImmediate, accountSelection, }: {
        redirectUrl: string;
        institutionId: string;
        referenceId: string;
        maxHistoricalDays: number;
        accessValidForDays: number;
        userLanguage: string;
        ssn: string;
        redirectImmediate: boolean;
        accountSelection: boolean;
    }): Promise<any>;
    #private;
}
import { InstitutionApi } from "./api/index.js";
import { AgreementApi } from "./api/index.js";
import { RequisitionsApi } from "./api/index.js";
import { AccountApi } from "./api/index.js";
import { HttpMethod } from "./httpMethod.js";
//# sourceMappingURL=index.d.ts.map