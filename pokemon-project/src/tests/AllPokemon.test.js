import AllPokemon from "../components/AllPokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//I've ensured these tests are falsifiable by altering variables and expects

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

  const oldFakeName = screen.queryByText(/fake pokemon name/i);
  expect(oldFakeName).not.toBeInTheDocument();

  rerender(<AllPokemon pokemon={fakePokemon} />);
  const newFakeName = screen.queryByText(/fake pokemon name/i);

  expect(newFakeName).toBeInTheDocument();
});
