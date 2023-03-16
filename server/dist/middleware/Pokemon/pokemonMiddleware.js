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
exports.validatePokemon = void 0;
const zod_1 = require("zod");
const Types_1 = require("../../utils/Types");
const validatePokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonList = req.body.pokemonList;
    console.log("validating");
    try {
        console.log("blah blah blah 1");
        console.log("pokemonList:", pokemonList);
        for (const poke of pokemonList) {
            yield Types_1.pokemonSchema.parseAsync(poke);
        }
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error.issues[0].message);
        }
        else {
            return res.status(400).send("Non-Zod error posting new Pokemon");
        }
    }
});
exports.validatePokemon = validatePokemon;
