// This takes an array of Pokemon objects and returns an individual card (SinglePokemon.js) for each object
import React from "react";
import SinglePokemon from "./SinglePokemon";
import { Pokemon } from "../data";

type Props = {
	pokemonData: Pokemon[];
};

const AllPokemon = (props) => {
	const { pokemonData, isShiny } = props;
	return (
		<main className="all-pokemon">
			{pokemonData.map((poke) => {
				return (
					<SinglePokemon
						poke={poke}
						key={poke.name}
						data-testid="single-pokemon"
						isShiny={isShiny}
					/>
				);
			})}
		</main>
	);
};
export default AllPokemon;
