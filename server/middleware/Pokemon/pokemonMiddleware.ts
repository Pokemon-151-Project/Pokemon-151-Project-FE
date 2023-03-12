import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { pokemonSchema } from "../../utils/Types";

export const validateSinglePokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pokemon = req.body;
  console.log("validating");

  try {
    await pokemonSchema.parseAsync(req.body);
    // return res
    //   .status(200)
    //   .send("Hey you dummy, put a next call in validateSinglePokemon!");
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues[0].message);
    } else {
      return res.status(400).send("Non-Zod error posting new Pokemon");
    }
  }
};
