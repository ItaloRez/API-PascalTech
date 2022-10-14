import "dotenv/config";

import express from "express";

import db from "./services/mongodb.js";

import routes from "./routes/index.js";

const app = express();

const port = process.env.PORT || 5000;

db.connect();

app.use(routes);

app.listen(port);
