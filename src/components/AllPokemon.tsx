import React from "react";
import styled from "styled-components";
import SinglePokemon from "./SinglePokemon";
import { Pokemon } from "../data";

const AllPokemonContainer = styled.main`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	padding: 2%;
	background-color: ${({ theme }) => theme.allPokemonBackground};
`;

type Props = {
	pokemonData: Pokemon[];
	isShiny: boolean;
};

const AllPokemon: React.FC<Props> = ({ pokemonData, isShiny }) => {
	return (
		<AllPokemonContainer>
			{pokemonData.map((poke) => (
				<SinglePokemon
					poke={poke}
					key={poke.id}
					data-testid="single-pokemon"
					isShiny={isShiny}
				/>
			))}
		</AllPokemonContainer>
	);
};

export default AllPokemon;
