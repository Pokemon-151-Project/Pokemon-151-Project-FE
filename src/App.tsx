import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
import { PokemonTypes } from "./data";
import { Pokemon } from "./data";
import useDarkMode from "./hooks/useDarkMode";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import { listPokemon } from "./graphql/queries";

const App: React.FC = () => {
	const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			let nextToken = null;
			let allPokemon: Pokemon[] = [];

			do {
				try {
					console.log("trying");
					const response: any = await API.graphql(
						graphqlOperation(listPokemon, {
							limit: 100,
							nextToken,
						})
					);
					console.log("response:", response);
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

	const [isShiny, setIsShiny] = useState<boolean>(false);

	const changeDisplay = (
		type: PokemonTypes | null = null,
		size: string | null = null,
		height: string | null = null,
		reset: string | null = null
	) => {
		const newData = pokemonData.filter((item) => {
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
				<h1>Pokemon 151 Project is currently down.</h1>
				<h3>This is being actively worked on (Feb 2024)</h3>
				<p>Please visit one of my other projects:</p>
				<p>
					<a href="https://cmd-buddy.com">CMDBUddy (CLI Command Generator)</a>
				</p>
				<p>
					<a href="https://master.dorqegfj1nrtm.amplifyapp.com/">
						Risk BattleOdds Calculator
					</a>
				</p>

				<AllPokemon pokemonData={pokemonData} isShiny={isShiny} />
			</div>
		</ThemeProvider>
	);
};

export default App;
