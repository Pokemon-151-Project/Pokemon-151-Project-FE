import SinglePokemon from "../components/SinglePokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//fake array with one pokemon for testing purposes
const fakePokemon = [
  {
    name: "Fake Pokemon Name",
    type: ["Grass", "Poison"],
    dexEntry: "blah blah blah",
    height: "4m",
    weight: "50kg",
  },
];

test("renders without errors", () => {
  render(<SinglePokemon poke={fakePokemon[0]} />);
});
