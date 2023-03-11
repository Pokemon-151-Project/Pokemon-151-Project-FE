import express, { Express, Request, Response } from "express";
import { json } from "stream/consumers";
const knex = require("../../../db/knex");

export const getAllPokemon = async (req: Request, res: Response) => {
  try {
    const pokemonList = await knex
      .select()
      .from("pokemon")
      // TODO: CHange this to Pokemon type
      .then((pokemon: any) => {
        return res.status(200).json(pokemon);
      });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
