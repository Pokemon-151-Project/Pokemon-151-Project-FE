import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
import data, { PokemonTypes } from "./data";
import { Pokemon } from "./data";
import useDarkMode from "./hooks/useDarkMode";
import { API, graphqlOperation } from "aws-amplify";
import { listPokemon } from "./graphql/queries";

const App: React.FC = () => {
	const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			let nextToken = null;
			let allPokemon: Pokemon[] = [];

			do {
				try {
					const response: any = await API.graphql(
						graphqlOperation(listPokemon, {
							limit: 100,
							nextToken,
						})
					);

					const items: Pokemon[] = response.data.listPokemon.items;
					const newNextToken = response.data.listPokemon.nextToken;

					allPokemon = [...allPokemon, ...items];
					nextToken = newNextToken;
				} catch (err) {
					console.error("Error fetching data:", err);
					break;
				}
			} while (nextToken);

			// Sort the Pokemon by ID
			const sortedPokemon = allPokemon.sort(
				(a, b) => Number(a.id) - Number(b.id)
			);

			setPokemonData(sortedPokemon);
		};

		fetchData();
	}, []);

	// Theme state
	const [isDarkMode, setDarkMode] = useDarkMode();
	const theme = isDarkMode ? darkTheme : lightTheme;

	const toggleTheme = () => {
		setDarkMode(!isDarkMode);
	};

	// Existing App logic
	const [isShiny, setIsShiny] = useState<boolean>(false);

	const changeDisplay = (
		type: PokemonTypes | null = null,
		size: string | null = null,
		height: string | null = null,
		reset: string | null = null
	) => {
		const newData = data.filter((item) => {
			if (type) {
				return item.type.includes(type);
			} else if (size) {
				const weightInt = parseFloat(item.weight.split(" ")[0]);
				return size === "small" ? weightInt < 5 : weightInt > 100;
			} else if (height) {
				const heightInt = parseFloat(item.height.split(" ")[0]);
				return height === "short" ? heightInt < 0.4 : heightInt > 2;
			} else if (reset) {
				return item;
			}
			return null;
		});
		setPokemonData(newData);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="App">
				<Header
					changeDisplay={changeDisplay}
					setIsShiny={setIsShiny}
					isShiny={isShiny}
					toggleTheme={toggleTheme}
					isDarkMode={isDarkMode}
				/>
				<h1>Maintenance</h1>
				<p>
					Our API is temporarily down due to a glitch. We're working on it.
					12.5.2023
				</p>
				<AllPokemon pokemonData={pokemonData} isShiny={isShiny} />
			</div>
		</ThemeProvider>
	);
};

export default App;
