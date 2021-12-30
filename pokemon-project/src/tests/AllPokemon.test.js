import AllPokemon from "../components/AllPokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//fake array with one pokemon for testing purposes
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

test("AllPokemon renders without errors", () => {
  render(<AllPokemon pokemon={fakePokemon} />);
});

test("AllPokemon renders correctly with certain props, then rerenders when those props change", () => {
  //renders first with empty props array, then renders with fakePokemon (defined above) to make sure it correctly renders with changed props.
  const { rerender } = render(<AllPokemon pokemon={[]} />);
  const fakeName = screen.queryAllByText(/fake pokemon name/i);

  expect(fakeName).toStrictEqual([]);

  rerender(<AllPokemon pokemon={fakePokemon} />);

  expect(fakeName).toBeTruthy();
});
