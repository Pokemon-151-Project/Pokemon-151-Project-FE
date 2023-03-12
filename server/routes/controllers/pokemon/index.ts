import express, { Express, NextFunction, Request, Response } from "express";
import { Knex } from "knex";
import { json } from "stream/consumers";
const knex: Knex = require("../../../db/knex");

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

export const deleteSinglePokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("deleting");
  res.status(200).send("Deleting!");
};
