import React from "react";
import SinglePokemon from "./SinglePokemon";
import { Pokemon } from "../data";

type Props = {
	pokemonData: Pokemon[];
	isShiny: boolean;
};

const AllPokemon: React.FC<Props> = ({ pokemonData, isShiny }) => {
	return (
		<main className="all-pokemon">
			{pokemonData.map((poke) => (
				<SinglePokemon
					poke={poke}
					key={poke.id}
					data-testid="single-pokemon"
					isShiny={isShiny}
				/>
			))}
		</main>
	);
};

export default AllPokemon;
