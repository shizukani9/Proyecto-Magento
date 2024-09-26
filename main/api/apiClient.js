const axios = require('axios');

class ApiClient {
    constructor(baseURL, token) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    async get(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(`Error in GET request to ${endpoint}:`, error);
            throw error;
        }
    }

    async delete(endpoint) {
        try {
            await this.client.delete(endpoint);
            console.log(`Successfully deleted resource at ${endpoint}`);
        } catch (error) {
            console.error(`Error in DELETE request to ${endpoint}:`, error);
            throw error;
        }
    }
}

module.exports = ApiClient;