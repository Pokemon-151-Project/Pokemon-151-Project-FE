const express = require("express");
const router = express.Router();

import { getAllPokemon, getPokemonByID } from "../controllers/pokemon";

router.get("/", getAllPokemon);

router.get("/:dexID", getPokemonByID);

module.exports = router;
