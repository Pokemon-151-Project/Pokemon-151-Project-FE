"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const pokemonMiddleware_1 = require("../../middleware/Pokemon/pokemonMiddleware");
const router = express.Router();
const pokemon_1 = require("../controllers/pokemon");
// GET all pokemon
router.get("/", pokemon_1.getAllPokemon);
// GET single pokemon
router.get("/:dexID", pokemon_1.getPokemonByID);
// DELETE single pokemon
router.delete("/:dexID", pokemon_1.deleteSinglePokemon);
// DELETE all pokemon
router.delete("/", pokemon_1.deleteAllPokemon);
// POST array of pokemon (one or multiple)
router.post("/", pokemonMiddleware_1.validatePokemon, pokemon_1.postNewPokemon);
router.put("/:dexID", pokemon_1.updatePokemon);
module.exports = router;
