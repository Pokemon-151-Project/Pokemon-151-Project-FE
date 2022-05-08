import SinglePokemon from "../components/SinglePokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

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

test("[1] renders without errors", () => {
  render(<SinglePokemon poke={fakePokemon[0]} />);
});

test("[2] Displays correct info on screen", () => {
  render(<SinglePokemon poke={fakePokemon[0]} />);

  const name = screen.queryByText(/fake pokemon name/i);
  const type = screen.queryByText(/grass/i);
  const dexEntry = screen.queryByText(/blah blah blah/i);
  const height = screen.queryByText(/4m/i);
  const weight = screen.queryByText(/50kg/i);
  expect(name).toBeVisible();
  expect(type).toBeVisible();
  expect(dexEntry).toBeVisible();
  expect(height).toBeVisible();
  expect(weight).toBeVisible();
});

test("[3] Toggles shiny image based on props", () => {
  let isShiny = false;

  const { rerender } = render(
    <SinglePokemon poke={fakePokemon[0]} isShiny={isShiny} />
  );

  let normalImg = screen.getByTestId("not-shiny");
  expect(normalImg).toBeVisible();

  isShiny = true;

  rerender(<SinglePokemon poke={fakePokemon[0]} isShiny={isShiny} />);
  let shinyImg = screen.getByTestId("shiny");
  expect(shinyImg).toBeVisible();
});

test("[4] Matches snapshot from 5.8.22", () => {});
