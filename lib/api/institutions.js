
export default class InstitutionApi {

    #endpoint = "institutions";
    #client = null;

    /**
     * Institution api class
     * @param {NordigenClient} client 
     */
    constructor({client}) {
        this.#client = client;
    }

    /**
     * Get list of institutions
     * @param {string} country 
     * @returns institution data array
     */ 
    getInstitutions({country}) {
        return this.#client.request({
            endpoint: `${this.#endpoint}/?country=${country}`
        });
    }

    /***
     * Get single institution by id
     * @param {string} id
     * @returns single institution data 
    */
    getInstitutionById(id) {
        return this.#client.request({endpoint: `${this.#endpoint}/${id}/`})
    }

}
