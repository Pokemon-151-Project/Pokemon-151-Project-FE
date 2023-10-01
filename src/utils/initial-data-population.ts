import { API, graphqlOperation } from "aws-amplify";
import { createPokemon } from ".././graphql/mutations";
import pokemonData from "../data";

const populateData = async () => {
	for (const pokemon of pokemonData) {
		try {
			await API.graphql(graphqlOperation(createPokemon, { input: pokemon }));
			console.log(`Successfully added ${pokemon.name}`);
		} catch (error) {
			console.error(`Error adding ${pokemon.name}: `, error);
		}
	}
};

populateData();
