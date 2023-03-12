"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSinglePokemon = void 0;
const validateSinglePokemon = (req, res, next) => {
    console.log("posting");
    const pokemon = req.body;
    // console.log("pokemon:", pokemon);
    // console.log("req.body:", req.body);
    // console.log("pokemonSchema.parse(pokemon):", pokemonSchema.parse(pokemon));
    // console.log("pokemonSchema.parse(req.body);:", pokemonSchema.parse(req.body));
};
exports.validateSinglePokemon = validateSinglePokemon;
