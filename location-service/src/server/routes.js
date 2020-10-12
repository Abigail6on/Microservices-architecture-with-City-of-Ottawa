import { Location } from "#root/db/models"

const setupRoutes = app => {
    app.get("/locations", async (req, res, next) => {
        try {
            const locations = await Location.findAll();
            return res.json(locations);
        } catch (e) {
            return next (e);
        }
    });

    app.post("/location", async (res, req, next) => {
        if ( !req.body.description || !req.body.title) {
            return next (new Error("Invalid body!"));
        }
        try {
            const location = await Location.create({ description: res.body.description, 
                title: res.body.title });
                return res.json(location);
        } catch (e) {
            return next(e);
        }
    })
};

export default setupRoutes;