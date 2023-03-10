import express from "express";
const router = express.Router();

router.use("/pokemon", require("./pokemon"));
