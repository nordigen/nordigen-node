export default class NordigenClient {
    /**
     *
     * @param {Object} params
     * @param {string} params.secretId
     * @param {string} params.secretKey
     */
    constructor({ secretId, secretKey }: {
        secretId: string;
        secretKey: string;
    });
    baseUrl: string;
    secretKey: string;
    secretId: string;
    headers: {
        accept: string;
        "Content-Type": string;
        "User-Agent": string;
    };
    institution: InstitutionApi;
    agreement: AgreementApi;
    requisition: RequisitionsApi;
    /**
     * Token setter
     * @param {string} token
    */
    set setToken(arg: string);
    token: string;
    /**
     * Token getter
     * @returns {string} token
    */
    get getToken(): string;
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
     * @param {HttpMethod} params.method HTTP method
     * @returns Request object
    */
    request({ endpoint, parameters, method }: {
        endpoint: string;
        parameters: string;
        method: HttpMethod;
    }): Promise<unknown>;
    /**
     * Generate new access token
     * @returns Object with token details
    */
    generateToken(): Promise<unknown>;
    /**
     * Exchange refresh token for access token
     * @param {Object} params
     * @param {string} params.refreshToken
     * @returns Object with new access token
    */
    exchangeToken({ refreshToken }: {
        refreshToken: string;
    }): Promise<unknown>;
    /**
     * Factory method that creates authorization in a specific institution
        and are responsible for the following steps:
            * Gets institution id;
            * Creates agreement
            * Creates requisiton
     * @returns Requisitions object
    */
    initSession({ redirectUrl, institutionId, referenceId, maxHistoricalDays }: {
        redirectUrl: any;
        institutionId: any;
        referenceId: any;
        maxHistoricalDays?: number;
    }): Promise<any>;
    #private;
}
import { InstitutionApi } from "./api/index.js";
import { AgreementApi } from "./api/index.js";
import { RequisitionsApi } from "./api/index.js";
import { AccountApi } from "./api/index.js";
import { HttpMethod } from "./httpMethod.js";
//# sourceMappingURL=index.d.ts.map