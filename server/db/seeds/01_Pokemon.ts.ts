import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("pokemon").del();

  // Inserts seed entries
  await knex("pokemon").insert([
    {
      dexID: 1,
      num: "001",
      name: "Bulbasaur",
      height: "0.71 m",
      weight: "6.9 kg",
      dexEntry:
        "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
      primaryType: "Grass",
      secondaryType: "Poison",
    },
    {
      dexID: 2,
      num: "002",
      name: "Ivysaur",
      height: "0.99 m",
      weight: "13.0 kg",
      dexEntry:
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      primaryType: "Grass",
      secondaryType: "Poison",
    },
  ]);
}
