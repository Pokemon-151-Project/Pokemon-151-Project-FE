"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const pokemon_1 = require("../controllers/pokemon");
router.get("/", pokemon_1.getAllPokemon);
router.get("/:dexID", pokemon_1.getPokemonByID);
module.exports = router;
