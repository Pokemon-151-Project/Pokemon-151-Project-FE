const express = require("express");
const router = express.Router();

import { getAllPokemon } from "../controllers/pokemon";

router.get("/", getAllPokemon);

module.exports = router;
