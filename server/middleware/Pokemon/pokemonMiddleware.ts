import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { pokemonSchema, SinglePokemon } from "../../utils/Types";

// validates an array of Pokemon objects. Obviously can be one or multiple pokemon
export const validatePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const pokemonList: SinglePokemon[] = req.body.pokemonList;

	try {
		for (const poke of pokemonList) {
			await pokemonSchema.parseAsync(poke);
		}
		if (pokemonList.length === 0) {
			throw "Empty pokemon list";
		}
		next();
	} catch (error) {
		if (error instanceof ZodError) {
			return res.status(400).json(error.issues[0].message);
		} else {
			return res.status(400).send(error);
		}
	}
};
