// listing reusable Zod types for validation

import { z } from "zod";

export const pokemonSchema = z.object({
  dexID: z.number({ required_error: "Need dexID integer" }).max(151),
  name: z.string({ required_error: "Pokemon name is required" }),
  num: z.string({ required_error: "need num, format 001 | 015 | 151 etc" }),
  primaryType: z.string({ required_error: "First type only" }),
  secondaryType: z.string().optional(),
  height: z.string({ required_error: "Height required" }),
  weight: z.string({ required_error: "Weight required" }),
  dexEntry: z.string({ required_error: "dexEntry required" }),
});

export type SinglePokemon = z.infer<typeof pokemonSchema>;
