// middleware works between api gateway and mysql DB
import got from "got";

const LOCATION_SERVICE_URI = "http://location-service:7100";

export default class locationService {
    static async fetchAllLocations () {
        const body = await got.get(`${LOCATION_SERVICE_URI}/locations`).json();
        return body;
    }
}