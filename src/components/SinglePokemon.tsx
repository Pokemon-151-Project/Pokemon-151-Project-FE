// This component displays a single pokemon with images and basic data.
import React from "react";
import { Pokemon } from "../data";
import styled from "styled-components";

type Props = {
	poke: Pokemon;
	isShiny: boolean;
};

const SinglePokemon: React.FC<Props> = (props) => {
	const { poke, isShiny } = props;
	const { name, type, dexEntry, height, weight, id, num } = poke;

	return (
		<PokemonCard data-testid="pokemon-card">
			<PokeName>
				{name} <DexId>#{id}</DexId>
			</PokeName>
			<PokeType>{type.join(" / ")}</PokeType>
			<HeightWeight>
				Height: {height} <br />
				Weight: {weight}
			</HeightWeight>
			<ImgContainer>
				<PokeImg
					data-testid={isShiny ? "shiny" : "not-shiny"}
					src={`https://www.serebii.net/${
						isShiny ? "Shiny/SWSH" : "swordshield/pokemon"
					}/${num}.png`}
					alt={name}
				/>
			</ImgContainer>
			<DexEntry>{dexEntry}</DexEntry>
		</PokemonCard>
	);
};

export default SinglePokemon;

const PokemonCard = styled.article`
	border: ${(props) => props.theme.singlePokemonBorder};
	box-sizing: border-box;
	width: 12rem;
	margin: 2%;
	background-color: ${(props) => props.theme.singlePokemonBGC};
	color: ${(props) => props.theme.singlePokemonColor};
`;

const PokeName = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	margin: 3%;
`;

const DexId = styled.span`
	font-size: 70%;
`;

const PokeType = styled.h3`
	margin: 3%;
`;

const HeightWeight = styled.h4`
	margin: 3%;
`;

const ImgContainer = styled.figure`
	height: 171px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 3%;
`;

const PokeImg = styled.img`
	width: 90%;
`;

const DexEntry = styled.blockquote`
	margin: 3%;
`;
