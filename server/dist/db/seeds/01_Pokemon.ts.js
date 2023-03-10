"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("Pokemon").del();
        // Inserts seed entries
        yield knex("Pokemon").insert([
            {
                dexID: 1,
                num: "001",
                name: "Bulbasaur",
                height: "0.71 m",
                weight: "6.9 kg",
                dexEntry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
                primaryType: "Grass",
                secondaryType: "Poison",
            },
            {
                dexID: 2,
                num: "002",
                name: "Ivysaur",
                height: "0.99 m",
                weight: "13.0 kg",
                dexEntry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
                primaryType: "Grass",
                secondaryType: "Poison",
            },
        ]);
    });
}
exports.seed = seed;
