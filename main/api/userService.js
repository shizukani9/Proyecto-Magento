const ApiClient = require('./apiClient');
const environment = require('../../environment.json');

class UserService {
    constructor() {
        this.apiClient = new ApiClient(`${environment.demo.url}`, environment.demo.apiToken);
    }

    async getUserIdByEmail(email) {
        const endpoint = `rest/default/V1/customers/search?searchCriteria[filterGroups][0][filters][0][field]=email&searchCriteria[filterGroups][0][filters][0][value]=${email}`;
        const data = await this.apiClient.get(endpoint);
        return data.items.length > 0 ? data.items[0].id : null;
    }

    async deleteUserById(userId) {
        const endpoint = `rest/default/V1/customers/${userId}`;
        console.log(endpoint);
        await this.apiClient.delete(endpoint);
        console.log("async deleteUserById");
    }
}

module.exports = UserService;