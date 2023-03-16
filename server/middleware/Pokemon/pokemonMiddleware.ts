import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { pokemonSchema, SinglePokemon } from "../../utils/Types";

export const validatePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const pokemonList: SinglePokemon[] = req.body.pokemonList;
	console.log("validating");

	try {
		console.log("blah blah blah 1");
		console.log("pokemonList:", pokemonList);

		for (const poke of pokemonList) {
			await pokemonSchema.parseAsync(poke);
		}

		next();
	} catch (error) {
		if (error instanceof ZodError) {
			return res.status(400).json(error.issues[0].message);
		} else {
			return res.status(400).send("Non-Zod error posting new Pokemon");
		}
	}
};
