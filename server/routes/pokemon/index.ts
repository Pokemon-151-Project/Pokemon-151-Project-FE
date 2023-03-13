const express = require("express");
import { Router } from "express";
import { validateSinglePokemon } from "../../middleware/Pokemon/pokemonMiddleware";
const router: Router = express.Router();
import {
  deleteSinglePokemon,
  getAllPokemon,
  getPokemonByID,
  postNewPokemon,
} from "../controllers/pokemon";

router.get("/", getAllPokemon);

router.get("/:dexID", getPokemonByID);

router.delete("/:dexID", deleteSinglePokemon);

router.post("/", validateSinglePokemon, postNewPokemon);

module.exports = router;
