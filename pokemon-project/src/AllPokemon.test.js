import AllPokemon from "./components/AllPokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const fakePokemon = [
  {
    name: "Pokeman",
    type: "Death Type",
    img: "https://google.com",
    dexEntry: "blah blah blah",
    height: "4m",
    weight: "50kg",
  },
];

//NEED TO UN-COMMENT RENDER AND SCREEN AND ALLpOKEMON IMPORTS
test("AllPokemon renders without errors with no props, then rerenfers with correct props", () => {
  const { rerender } = render(<AllPokemon pokemon={[]} />);

  rerender(<AllPokemon pokemon={fakePokemon} />);
  //returning undefined for now until I figure out how to define pokemon
  return undefined;
});
