import { addHours } from "date-fns";
import { Users, UserSession } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync"

const USER_SESSION_EXOIRY_HOURS = 1;

// for login function
const setupRoutes = app => {
    app.post("/sessions", async (res, req, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid body"));
        }
        try {
            const user = await Users.findOne({ attributes: {}, where: {
                email: req.body.email
            }});
            if (!user) return next(new Error("Invalide email!"))

            if (passwordCompareSync(req.body.password, 
                                    user.passwordHash)){
                return next(new Error("Incorrect Password!"));
            }
            const expiresAt = addHours(new Date(), USER_SESSION_EXOIRY_HOURS);
            // yarn add date-fns
            const sessionToken = generateUUID();
            const userSession = await UserSession.create({
                expiresAt,
                id: sessionToken,
                userId: user.id
            });
            return res.json(userSession);
        } catch (e) {
            return next(e);
        }
    });

    app.get("/sessions/:sessionId", async (req, res, next) => {
        try {
            const userSession = await UserSession.findByPk(req.params.sessionId);

            if (!userSession) return next(new Error("Invalid Session ID!"))

            return res.json(userSession)
        }catch (e) {
            return next(e);
        }
    })

    app.post("/users", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid body"));
        }
        try {
            const newUser = await Users.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            });
            return res.json(newUser);
    }   catch (e) {
        return next(e);
    };
});

    app.get("/users/:userId", async (req, res, next) => {
        try {
            const user = await User.findByPK(req.params.userId);
        
        if (!user) return next(new Error("Invalid user ID"));
        
        return res.json(user);
        } catch (e) {
        return next(e);
        }  
});
};


export default setupRoutes;