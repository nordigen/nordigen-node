export default class InstitutionApi {
    /**
     * Institution api class
     * @param {NordigenClient} client
     */
    constructor({ client }: NordigenClient);
    /**
     * Get list of institutions
     * @param {string} country
     * @returns institution data array
     */
    getInstitutions({ country }: string): any;
    /***
     * Get single institution by id
     * @param {string} id
     * @returns single institution data
    */
    getInstitutionById(id: string): any;
    #private;
}
//# sourceMappingURL=institutions.d.ts.map