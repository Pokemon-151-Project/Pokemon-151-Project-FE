const express = require("express");
import { Router } from "express";
import { validatePokemon } from "../../middleware/Pokemon/pokemonMiddleware";
const router: Router = express.Router();
import {
	deleteAllPokemon,
	deleteSinglePokemon,
	getAllPokemon,
	getPokemonByID,
	postNewPokemon,
} from "../controllers/pokemon";

// GET all pokemon
router.get("/", getAllPokemon);

// GET single pokemon
router.get("/:dexID", getPokemonByID);

// DELETE single pokemon
router.delete("/:dexID", deleteSinglePokemon);

// DELETE all pokemon
router.delete("/", deleteAllPokemon);

// POST array of pokemon (one or multiple)
router.post("/", validatePokemon, postNewPokemon);

module.exports = router;
