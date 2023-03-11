import { Request, Response, NextFunction } from "express";

export const validatePokemon = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log("validating");
  //   console.log("req:", req);
  next();
};
