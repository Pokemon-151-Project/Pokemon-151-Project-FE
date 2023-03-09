//TODO: Uninstall bcryptjs and maybe JWT
// TODO: Install types for knex, pg, helmet, cors, bryptjs

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const cors = require("express");
const helmet = require("helmet");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/pokemon", (req: Request, res: Response) => {
  res.send("Pika pika");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
