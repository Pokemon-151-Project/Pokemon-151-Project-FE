//TODO: Uninstall bcryptjs and maybe JWT
// TODO: Install types for knex, pg, helmet, cors, bryptjs

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const routes = require("./routes");
const bodyParser = require("body-parser");

const cors = require("express");
const helmet = require("helmet");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
