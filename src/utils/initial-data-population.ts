import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createPokemon, deletePokemon } from "../graphql/mutations";
import { listPokemon } from "../graphql/queries";
import pokemonData from "../data";
import awsconfig from "../aws-exports";
import { ListPokemonQuery } from "../API";

Amplify.configure(awsconfig);

const deleteExistingData = async () => {
	try {
		const { data } = (await API.graphql(graphqlOperation(listPokemon))) as {
			data: ListPokemonQuery;
		};
		const existingPokemon = data?.listPokemon?.items;

		if (existingPokemon) {
			console.log("Deleting old pokemon. This will take a few minutes.");
			for (const pokemon of existingPokemon) {
				if (pokemon?.id) {
					await API.graphql(
						graphqlOperation(deletePokemon, { input: { id: pokemon.id } })
					);
				}
			}
			console.log("successfully deleted all pre-existing pokemon");
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
		console.log("Adding new pokemon. This will take a few minutes.");
		try {
			await API.graphql(graphqlOperation(createPokemon, { input: pokemon }));
		} catch (error) {
			console.error(`Error adding ${pokemon.name}: `, error);
		}
	}
	console.log("Successfully added all new Pokemon");
};

const run = async () => {
	await deleteExistingData();
	await populateData();
};

run();
