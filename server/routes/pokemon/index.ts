const express = require("express");
import { Router } from "express";
const router: Router = express.Router();
import { SinglePokemon } from "../../utils/Types";

import {
  deleteSinglePokemon,
  getAllPokemon,
  getPokemonByID,
  postNewPokemon,
} from "../controllers/pokemon";

router.get("/", getAllPokemon);

router.get("/:dexID", getPokemonByID);

router.delete("/:dexID", deleteSinglePokemon);

router.post("/", postNewPokemon);

module.exports = router;
