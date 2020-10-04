import { Location } from "#root/db/models"

const setupRoutes = app => {
    app.get("/locations", async (req, res, next) => {
        const locations = await Location.findAll();
        return res.json(locations);
    });
};

export default setupRoutes;