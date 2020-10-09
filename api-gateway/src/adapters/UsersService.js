import got from "got";

const USERS_SERVICE_URI = "http://login-service:7101";

export default class UsersService {
    static async createUser ({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URI}/users`, {
            json: {email, password}
        }).json();
        return body;
    }
    static async fetchUser({ userId }) {
        const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
        return body;
    }
    static async createUserSession({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URI}/sessions`, { 
            json: {email, password}
        }).json();
        return body;
    }
    static async fetchUserSession({ userSessionId }) {
        const body = await got.get(`${USERS_SERVICE_URI}/sessions/${userSessionId}`).json();
        return body;
    }
}