import { NextFunction } from "express";
import { validatePokemon } from "./pokemonMiddleware";
var httpMocks = require("node-mocks-http");
import { SinglePokemon } from "../../utils/Types";

test("[1] Sanity check", async () => {
	const bob = 2;
	expect(bob).toBe(2);
});

test("[2] Accepts valid pokemon list", async () => {
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
	// Couldn't get TS to accept this as a Request but it works for our needs in this test.
	// @ts-ignore
	await validatePokemon(req, res, next);

	expect(next).toHaveBeenCalled();
});

test.only("[3] Denies empty pokemon list", async () => {
	const emptyPokemonList: SinglePokemon[] = [];

	const req: Request = httpMocks.createRequest({
		body: {
			pokemonList: emptyPokemonList,
		},
	});

	const res: Response = httpMocks.createResponse();
	const next: NextFunction = jest.fn();

	// Couldn't get TS to accept this as a Request but it works for our needs in this test.
	// @ts-ignore
	await validatePokemon(req, res, next);

	expect(next).not.toHaveBeenCalled();
	// @ts-ignore - not sure why this doesn't recognize statusCode
	expect(res.statusCode).toBe(400);
});

// test("Throws ZodError if invalid pokemon", async () => {
// 	const invalidPokemonList = [
// 		{
// 			dexID: 8,
// 			name: 123,
// 			num: "003",
// 			primaryType: "Pikatype",
// 			secondaryType: "Bulbatype",
// 			height: "0.5m",
// 			weight: "66kg",
// 			dexEntry: "Pika pika!",
// 		},
// 	];
// 	const req: Request = httpMocks.createRequest({
// 		body: {
// 			pokemonList: invalidPokemonList,
// 		},
// 	});

// 	const res: Response = httpMocks.createResponse();

// 	const next: NextFunction = jest.fn();

// 	await validatePokemon(req, res, next);

// 	expect(res.status).toHaveBeenCalledWith(400);
// });
