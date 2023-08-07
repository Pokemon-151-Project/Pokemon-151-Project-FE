import React, { useState } from "react";
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
//This is the original data of the 151 pokemon being displayed.
import data from "./data";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import {
	createPokemon,
	updatePokemon,
	deletePokemon,
} from "./graphql/mutations";

Amplify.configure(awsconfig);

function App() {
	//sets the pokemon data to state. Updates based on user preference
	const [pokemonData, setPokemonData] = useState(data);
	//isShiny allows users to press a header button to show alternate ("shiny") sprites for each pokemon
	const [isShiny, setIsShiny] = useState(false);

	//Allows the user to press a button in the header dropdown to show only
	//pokemon of a certain type, height, or size -
	//or reset the app to default if the user selects that.
	const changeDisplay = (
		type = null,
		size = null,
		height = null,
		reset = null
	) => {
		const newData = data.filter((item) => {
			if (type) {
				return item.type.includes(type);
			} else if (size) {
				const weightInt = item.weight.split(" ")[0];
				return size === "small" ? weightInt < 5 : weightInt > 100;
			} else if (height) {
				const heightInt = item.height.split(" ")[0];
				return height === "short" ? heightInt < 0.4 : heightInt > 2;
			} else if (reset) {
				return item;
			}
			return null;
		});
		setPokemonData(newData);
	};

	return (
		<div className="App">
			<Header
				changeDisplay={changeDisplay}
				setIsShiny={setIsShiny}
				isShiny={isShiny}
			/>
			<AllPokemon pokemonData={pokemonData} isShiny={isShiny} />
		</div>
	);
}

export default App;
