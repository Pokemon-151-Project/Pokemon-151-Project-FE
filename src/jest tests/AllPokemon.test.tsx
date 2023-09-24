import AllPokemon from "../components/AllPokemon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Pokemon } from "../data";
import React from "react";

//fake array with one pokemon for testing purposes
const fakePokemon: Pokemon[] = [
	{
		id: 1,
		num: "001",
		name: "Fake Pokemon Name",
		type: ["Ground"],
		height: "4m",
		weight: "50kg",
		dexEntry: "blah blah blah",
	},
];
//This is similar to the above array but with multiple pokemon for testing purposes
const multFakePokemon: Pokemon[] = [
	{
		id: 1,
		num: "001",
		name: "Fake Pokemon Name",
		type: ["Bug"],
		dexEntry: "blah blah blah",
		height: "4m",
		weight: "50kg",
	},
	{
		id: 2,
		num: "002",
		name: "Fake2",
		type: ["Fire"],
		dexEntry: "This pokemon does nothing",
		height: "5m",
		weight: "60kg",
	},
	{
		id: 3,
		num: "003",
		name: "Fake3",
		type: ["Ghost", "Ice"],
		dexEntry: "This pokemon is god",
		height: "6m",
		weight: "80kg",
	},
];

test("[1] AllPokemon renders without errors", () => {
	render(<AllPokemon pokemonData={fakePokemon} isShiny={false} />);
});

test("[2] AllPokemon renders correctly with certain props, then rerenders when those props change", () => {
	//renders first with empty props array, then renders with fakePokemon (defined above) to make sure it correctly renders with changed props.
	const { rerender } = render(<AllPokemon pokemonData={[]} isShiny={false} />);

	const oldFakeName = screen.queryByText(/fake pokemon name/i);
	expect(oldFakeName).not.toBeInTheDocument();

	rerender(<AllPokemon pokemonData={fakePokemon} isShiny={false} />);
	const newFakeName = screen.queryByText(/fake pokemon name/i);
	expect(newFakeName).toBeInTheDocument();
});

test("[3] Can render multiple pokemon", () => {
	//Passing in an array with multiple pokemon to make sure it renders all of them

	render(<AllPokemon pokemonData={multFakePokemon} isShiny={false} />);

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
		<AllPokemon pokemonData={multFakePokemon} isShiny={false} />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
