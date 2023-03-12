"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postNewPokemon = exports.deleteSinglePokemon = exports.getPokemonByID = exports.getAllPokemon = void 0;
const knex = require("../../../db/knex");
const getAllPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemonList = yield knex
            .select()
            .from("pokemon")
            // TODO: CHange this to Pokemon type
            .then((pokemon) => {
            return res.status(200).json(pokemon);
        });
        next();
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Error getting all pokemon");
    }
});
exports.getAllPokemon = getAllPokemon;
const getPokemonByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singlePokemon = yield knex
            .select()
            .from("pokemon")
            .where("dexID", req.params.dexID)
            .then((pokemon) => {
            if (pokemon.length === 0) {
                return res.status(404).send("No pokemon with that id");
            }
            return res.status(200).json(pokemon);
        });
        next();
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Error getting pokemon");
    }
});
exports.getPokemonByID = getPokemonByID;
// TODO: Flesh this out
const deleteSinglePokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("deleting");
    console.log("req.params.dexID:", req.params.dexID);
    yield knex("pokemon")
        .where("dexID", req.params.dexID)
        .del()
        .then((val) => {
        res.status(200).send("Deleting!");
        next();
    })
        .catch((err) => {
        res.status(404).send(`Error deleting pokemon: ${err}`);
        next();
    });
});
exports.deleteSinglePokemon = deleteSinglePokemon;
const postNewPokemon = (req, res, next) => {
    console.log("posting");
    const pokemon = req.body;
    // console.log("pokemon:", pokemon);
    // console.log("req.body:", req.body);
    // console.log("pokemonSchema.parse(pokemon):", pokemonSchema.parse(pokemon));
    // console.log("pokemonSchema.parse(req.body);:", pokemonSchema.parse(req.body));
};
exports.postNewPokemon = postNewPokemon;
