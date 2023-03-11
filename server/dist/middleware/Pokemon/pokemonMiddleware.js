"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePokemon = void 0;
const validatePokemon = (req, res, next) => {
    console.log("validating");
    //   console.log("req:", req);
    next();
};
exports.validatePokemon = validatePokemon;
