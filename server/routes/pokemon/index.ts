const express = require("express");
const router = express.Router();

import { getAllPokemon, getPokemonByID } from "../controllers/pokemon";

router.get("/", getAllPokemon);

router.get("/:id", getPokemonByID);

module.exports = router;
