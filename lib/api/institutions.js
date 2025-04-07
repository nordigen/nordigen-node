import NordigenClient from "../index.js";

export default class InstitutionApi {

    #endpoint = "institutions";
    #client = null;

    /**
     * Agreements api class
     * @param {Object} params
     * @param {NordigenClient} params.client
     */
    constructor({client}) {
        this.#client = client;
    }

    /**
     * Get list of institutions
     * @param {Object} params
     * @param {string|undefined} params.country
     * @returns institution data array
     */ 
    getInstitutions({country}) {
        return this.#client.request({
            endpoint: `${this.#endpoint}${country ? `?country=${country}` : ""}`
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
