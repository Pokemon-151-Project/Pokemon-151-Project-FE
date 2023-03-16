import { NextFunction } from "express";
import { validatePokemon } from "./pokemonMiddleware";
var httpMocks = require("node-mocks-http");

test("test_validArray", async () => {
	const bob = "bob";

	// const req: Request = {
	// 	body: {
	// 		pokemonList: [
	// 			{
	// 				dexID: 8,
	// 				name: "Pikasaurmon",
	// 				num: "003",
	// 				primaryType: "Pikatype",
	// 				secondaryType: "Bulbatype",
	// 				height: "0.5m",
	// 				weight: "66kg",
	// 				dexEntry: "Pika pika!",
	// 			},
	// 			{
	// 				dexID: 25,
	// 				name: "Pikachu",
	// 				num: "025",
	// 				primaryType: "Electric",
	// 				secondaryType: null,
	// 				height: "0.4m",
	// 				weight: "6kg",
	// 				dexEntry:
	// 					"When several of these Pokémon gather, their electricity could build and cause lightning storms.",
	// 			},
	// 		],
	// 	},
	// } as any as Request;
	// const res: Response = {
	// 	status: jest.fn().mockReturnThis(),
	// 	json: jest.fn().mockReturnThis(),
	// 	send: jest.fn().mockReturnThis(),
	// } as any as Response;
	// const next: NextFunction = jest.fn();
	// await validatePokemon(req, res, next);
	// expect(next).toHaveBeenCalled();
	// expect(res.status).not.toHaveBeenCalled();
	// expect(res.json).not.toHaveBeenCalled();
	// expect(res.status).not.toHaveBeenCalled();
});
