const express = require("express");
const router = express.Router();

import { validatePokemon } from "../../middleware/Pokemon/pokemonMiddleware";
import { getAllPokemon } from "../controllers/pokemon";

router.get("/", getAllPokemon);

module.exports = router;
