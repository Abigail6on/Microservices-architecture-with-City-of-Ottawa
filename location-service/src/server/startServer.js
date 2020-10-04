import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import accessEnv from "#root/helpers/accessEnv";
import setupRouts from "./routes"

const PORT = accessEnv("PORT", 7100);

const app = express();


// middelware session
app.use(bodyParser.json());

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

setupRouts(app);

app.listen(PORT, '0.0.0.0', () => {
    console.info(`Location Server is listening to ${PORT}`);
});

