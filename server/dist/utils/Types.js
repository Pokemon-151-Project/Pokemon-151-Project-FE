"use strict";
// listing reusable Zod types for validation
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonSchema = void 0;
const zod_1 = require("zod");
exports.pokemonSchema = zod_1.z.object({
    dexID: zod_1.z.number({ required_error: "Need dexID integer" }).max(151),
    name: zod_1.z.string({ required_error: "Pokemon name is required" }),
    num: zod_1.z.string({ required_error: "need num, format 001 | 015 | 151 etc" }),
    primaryType: zod_1.z.string({ required_error: "First type only" }),
    secondaryType: zod_1.z.string().optional(),
    height: zod_1.z.string({ required_error: "Height required" }),
    weight: zod_1.z.string({ required_error: "Weight required" }),
    dexEntry: zod_1.z.string({ required_error: "dexEntry required" }),
});
