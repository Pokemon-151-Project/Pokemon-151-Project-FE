import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createPokemon, deletePokemon } from "../graphql/mutations"; // Import deletePokemon
import { listPokemon } from "../graphql/queries"; // Import listPokemon
import pokemonData from "../data";
import awsconfig from "../aws-exports"; // adjust the path
import { ListPokemonQuery } from "../API";

Amplify.configure(awsconfig);

const deleteExistingData = async () => {
	try {
		const { data } = (await API.graphql(graphqlOperation(listPokemon))) as {
			data: ListPokemonQuery;
		};
		const existingPokemon = data?.listPokemon?.items;

		if (existingPokemon) {
			for (const pokemon of existingPokemon) {
				if (pokemon?.id) {
					await API.graphql(
						graphqlOperation(deletePokemon, { input: { id: pokemon.id } })
					);
					console.log(`Successfully deleted ${pokemon.name}`);
				}
			}
		}
	} catch (error) {
		console.error("Error deleting existing records:", error);
	}
};

const populateData = async () => {
	// Sort pokemonData by Pokedex number
	const sortedPokemonData = [...pokemonData].sort(
		(a, b) => parseInt(a.num) - parseInt(b.num)
	);

	for (const pokemon of sortedPokemonData) {
		try {
			await API.graphql(graphqlOperation(createPokemon, { input: pokemon }));
			console.log(`Successfully added ${pokemon.name}`);
		} catch (error) {
			console.error(`Error adding ${pokemon.name}: `, error);
		}
	}
};

const run = async () => {
	await deleteExistingData();
	await populateData();
};

run();
