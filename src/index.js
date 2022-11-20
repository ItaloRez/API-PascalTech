import "dotenv/config";

import express from "express";
import cors from "cors";

import db from "./services/mongodb.js";

import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

db.connect();

app.use(routes);

app.listen(port);
