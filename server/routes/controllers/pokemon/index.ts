import { NextFunction, Request, Response } from "express";
import { Knex } from "knex";
import { SinglePokemon } from "../../../utils/Types";
const knex: Knex = require("../../../db/knex");

// GET ALL
export const getAllPokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pokemonList = await knex
			.select()
			.from("pokemon")
			// TODO: CHange this to Pokemon type
			.then((pokemon: any) => {
				return res.status(200).json(pokemon);
			});
		next();
	} catch (err: any) {
		console.error(err.message);
		res.status(500).send("Error getting all pokemon");
	}
};

// GET POKEMON BY ID
export const getPokemonByID = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const singlePokemon = await knex
			.select()
			.from("pokemon")
			.where("dexID", req.params.dexID)
			.then((pokemon: any) => {
				if (pokemon.length === 0) {
					return res.status(404).send("No pokemon with that id");
				}
				return res.status(200).json(pokemon);
			});
		next();
	} catch (err: any) {
		console.error(err.message);
		res.status(500).send("Error getting pokemon");
	}
};

// DELETE POKEMON BY ID
export const deleteSinglePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("req.params.dexID:", req.params.dexID);
	await knex("pokemon")
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
};

export const deleteAllPokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	await knex("pokemon")
		.del()
		.then(() => {
			res.status(202).send("Deleted all pokemon");
		})
		.catch((err) => {
			res.status(404).send(`Error deleting all pokemon: ${err}`);
			next();
		});
};

// POST NEW POKEMON
export const postNewPokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("posting");
	const { pokemonList } = req.body;
	console.log("req:", req);
	await knex("pokemon")
		.insert(pokemonList)
		.then(() => {
			res.status(201).send(`Pokemon successfully created!`);
		})
		.catch((err) => {
			res.status(409).json(`Error posting Pokemon: ${err}`);
		});
};

export const updatePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("updating");
};
