import { NextFunction } from "express";
import { validatePokemon } from "./pokemonMiddleware";
var httpMocks = require("node-mocks-http");

test("[1] Sanity check", async () => {
	const bob = 2;
	expect(bob).toBe(2);
});

test("test_validPokemonList", async () => {
	// const validPokemonList = [
	// 	{
	// 		dexID: 8,
	// 		name: "Pikasaurmon",
	// 		num: "003",
	// 		primaryType: "Pikatype",
	// 		secondaryType: "Bulbatype",
	// 		height: "0.5m",
	// 		weight: "66kg",
	// 		dexEntry: "Pika pika!",
	// 	},
	// 	{
	// 		dexID: 25,
	// 		name: "Pikachu",
	// 		num: "025",
	// 		primaryType: "Electric",
	// 		secondaryType: null,
	// 		height: "0.4m",
	// 		weight: "6kg",
	// 		dexEntry:
	// 			"When several of these Pokémon gather, their electricity could build and cause lightning storms.",
	// 	},
	// ];
	const req: Request = httpMocks.createRequest({
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
	const res: Response = httpMocks.createResponse();
	const next: NextFunction = jest.fn();
	// @ts-ignore
	await validatePokemon(req, res, next);

	expect(next).toHaveBeenCalled();
});
