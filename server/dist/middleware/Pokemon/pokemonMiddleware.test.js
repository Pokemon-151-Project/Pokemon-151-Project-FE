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
const pokemonMiddleware_1 = require("./pokemonMiddleware");
var httpMocks = require("node-mocks-http");
test("[1] Sanity check", () => __awaiter(void 0, void 0, void 0, function* () {
    const bob = 2;
    expect(bob).toBe(2);
}));
test("[2] Accepts valid pokemon list", () => __awaiter(void 0, void 0, void 0, function* () {
    const req = httpMocks.createRequest({
        body: {
            pokemonList: [
                {
                    dexID: 12,
                    name: "Pikasaurmon",
                    num: "003",
                    primaryType: "Pikatype",
                    secondaryType: "Bulbatype",
                    height: "0.5m",
                    weight: "66kg",
                    dexEntry: "Pika pika!",
                },
                {
                    dexID: 54,
                    name: "Pikasaurmon",
                    num: "003",
                    primaryType: "Pikatype",
                    secondaryType: "Bulbatype",
                    height: "0.5m",
                    weight: "66kg",
                    dexEntry: "Pika pika!",
                },
            ],
        },
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();
    // Couldn't get TS to accept this as a Request but it works for our needs in this test.
    // @ts-ignore
    yield (0, pokemonMiddleware_1.validatePokemon)(req, res, next);
    expect(next).toHaveBeenCalled();
}));
test("[3] Denies empty pokemon list", () => __awaiter(void 0, void 0, void 0, function* () {
    const emptyPokemonList = [];
    const req = httpMocks.createRequest({
        body: {
            pokemonList: emptyPokemonList,
        },
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();
    // Couldn't get TS to accept this as a Request but it works for our needs in this test.
    // @ts-ignore
    yield (0, pokemonMiddleware_1.validatePokemon)(req, res, next);
    expect(next).not.toHaveBeenCalled();
    // @ts-ignore - not sure why this doesn't recognize statusCode
    expect(res.statusCode).toBe(400);
}));
test("[4] Throws ZodError if invalid pokemon", () => __awaiter(void 0, void 0, void 0, function* () {
    const invalidPokemonList = [
        {
            dexID: 8,
            name: 123,
            num: "003",
            primaryType: "Pikatype",
            secondaryType: "Bulbatype",
            height: "0.5m",
            weight: "66kg",
            dexEntry: "Pika pika!",
        },
    ];
    const req = httpMocks.createRequest({
        body: {
            pokemonList: invalidPokemonList,
        },
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();
    // Couldn't get TS to accept this as a Request but it works for our needs in this test.
    // @ts-ignore
    yield (0, pokemonMiddleware_1.validatePokemon)(req, res, next);
    // @ts-ignore - not sure why this doesn't recognize statusCode
    expect(res.statusCode).toBe(400);
}));
