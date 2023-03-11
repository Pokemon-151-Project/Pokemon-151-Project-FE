"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const pokemonMiddleware_1 = require("../../middleware/Pokemon/pokemonMiddleware");
const pokemon_1 = require("../controllers/pokemon");
router.get("/", pokemon_1.getAllPokemon, pokemonMiddleware_1.validatePokemon);
module.exports = router;
