import AllPokemon from "./components/AllPokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const fakePokemon = [
  {
    name: "Fake Pokemon Name",
    type: "Death Type",
    img: "https://google.com",
    dexEntry: "blah blah blah",
    height: "4m",
    weight: "50kg",
  },
];

//NEED TO UN-COMMENT RENDER AND SCREEN AND ALLpOKEMON IMPORTS
test("AllPokemon renders without errors", () => {
  render(<AllPokemon pokemon={fakePokemon} />);
});

test("AllPokemon renders correctly with certain props, then rerenders when those props change", () => {
  const { rerender } = render(<AllPokemon pokemon={[]} />);
  const fakeName = screen.queryAllByText(/fake pokemon name/i);

  expect(fakeName).toStrictEqual([]);

  rerender(<AllPokemon pokemon={fakePokemon} />);

  expect(fakeName).toBeTruthy();

  console.log("Fake Name:", fakeName);
});
