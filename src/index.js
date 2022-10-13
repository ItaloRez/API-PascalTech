import "dotenv/config";

import express from "express";

import db from "./services/mongodb.js";

import routes from "./routes/index.js";

const app = express();

db.connect();

app.use(routes);

app.listen(3333);
