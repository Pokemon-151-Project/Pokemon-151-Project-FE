import AllPokemon from "../../components/AllPokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

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

//This is similar to the above array but with multiple pokemon for testing purposes
const multFakePokemon = [
  {
    name: "Fake Pokemon Name",
    type: "Death Type",
    img: "https://google.com",
    dexEntry: "blah blah blah",
    height: "4m",
    weight: "50kg",
  },
  {
    name: "Fake2",
    type: "Derp Type",
    img: "https://google.com/1234",
    dexEntry: "This pokemon does nothing",
    height: "5m",
    weight: "60kg",
  },
  {
    name: "Fake3",
    type: "Ground Type",
    img: "https://google.com/1234567",
    dexEntry: "This pokemon is god",
    height: "6m",
    weight: "80kg",
  },
];

test("[1] AllPokemon renders without errors", () => {
  render(<AllPokemon pokemonData={fakePokemon} />);
});

test("[2] AllPokemon renders correctly with certain props, then rerenders when those props change", () => {
  //renders first with empty props array, then renders with fakePokemon (defined above) to make sure it correctly renders with changed props.
  const { rerender } = render(<AllPokemon pokemonData={[]} />);

  const oldFakeName = screen.queryByText(/fake pokemon name/i);
  expect(oldFakeName).not.toBeInTheDocument();

  rerender(<AllPokemon pokemonData={fakePokemon} />);
  const newFakeName = screen.queryByText(/fake pokemon name/i);
  expect(newFakeName).toBeInTheDocument();
});

test("[3] Can render multiple pokemon", () => {
  //Passing in an array with multiple pokemon to make sure it renders all of them

  render(<AllPokemon pokemonData={multFakePokemon} />);

  const name1 = screen.queryByText(/fake pokemon name/i);
  const name2 = screen.queryByText(/fake2/i);
  const name3 = screen.queryByText(/fake3/i);
  const name4 = screen.queryByText(/fake4/i);
  expect(name1).toBeVisible();
  expect(name2).toBeVisible();
  expect(name3).toBeVisible();
  expect(name4).toBeFalsy();
});

test("[4] Matches snapshot from 5.8.22", () => {
  const component = renderer.create(
    <AllPokemon pokemonData={multFakePokemon} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
