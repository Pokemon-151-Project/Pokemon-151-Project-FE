const express = require("express");
import { Router } from "express";
const router: Router = express.Router();

import {
  deleteSinglePokemon,
  getAllPokemon,
  getPokemonByID,
} from "../controllers/pokemon";

router.get("/", getAllPokemon);

router.get("/:dexID", getPokemonByID);

router.delete("/:dexID", deleteSinglePokemon);

module.exports = router;
