export default class InstitutionApi {
    /**
     * Agreements api class
     * @param {Object} params
     * @param {NordigenClient} params.client
     */
    constructor({ client }: {
        client: NordigenClient;
    });
    /**
     * Get list of institutions
     * @param {Object} params
     * @param {string} params.country
     * @returns institution data array
     */
    getInstitutions({ country }: {
        country: string;
    }): any;
    /***
     * Get single institution by id
     * @param {string} id
     * @returns single institution data
    */
    getInstitutionById(id: string): any;
    #private;
}
import NordigenClient from "../index.js";
//# sourceMappingURL=institutions.d.ts.map