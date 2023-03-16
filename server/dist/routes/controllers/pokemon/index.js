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
exports.postNewPokemon = exports.deleteAllPokemon = exports.deleteSinglePokemon = exports.getPokemonByID = exports.getAllPokemon = void 0;
const knex = require("../../../db/knex");
// GET ALL
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
// GET POKEMON BY ID
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
// DELETE POKEMON BY ID
const deleteSinglePokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.params.dexID:", req.params.dexID);
    yield knex("pokemon")
        .where("dexID", req.params.dexID)
        .del()
        .then((val) => {
        res.status(202).send("Deleting!");
        next();
    })
        .catch((err) => {
        res.status(404).send(`Error deleting pokemon: ${err}`);
        next();
    });
});
exports.deleteSinglePokemon = deleteSinglePokemon;
const deleteAllPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield knex("pokemon")
        .del()
        .then(() => {
        res.status(202).send("Deleted all pokemon");
    })
        .catch((err) => {
        res.status(404).send(`Error deleting all pokemon: ${err}`);
        next();
    });
});
exports.deleteAllPokemon = deleteAllPokemon;
// POST NEW POKEMON
const postNewPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("posting");
    const pokemon = req.body;
    // console.log("pokemon:", pokemon);
    yield knex("pokemon")
        .insert(pokemon)
        .then(() => {
        res.status(201).send(`Pokemon ${pokemon.name} successfully created!`);
    })
        .catch((err) => {
        res.status(409).json(`Error posting Pokemon: ${err}`);
    });
});
exports.postNewPokemon = postNewPokemon;
