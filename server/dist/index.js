"use strict";
//TODO: Uninstall bcryptjs and maybe JWT
// TODO: Install types for knex, pg, helmet, cors, bryptjs
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("express");
const helmet = require("helmet");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(cors());
app.use(helmet());
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/pokemon", (req, res) => {
    res.send("Pika pika");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
