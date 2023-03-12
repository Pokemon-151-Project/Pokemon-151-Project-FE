import { NextFunction, Request, Response } from "express";
import { pokemonSchema } from "../../../utils/Types";

export const validateSinglePokemon = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("posting");
  const pokemon = req.body;
  // console.log("pokemon:", pokemon);
  // console.log("req.body:", req.body);
  // console.log("pokemonSchema.parse(pokemon):", pokemonSchema.parse(pokemon));

  // console.log("pokemonSchema.parse(req.body);:", pokemonSchema.parse(req.body));
};
