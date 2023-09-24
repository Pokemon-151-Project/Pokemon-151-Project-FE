import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
import data, { PokemonTypes } from "./data";
import { Pokemon } from "./data";

const App: React.FC = () => {
	// Theme state
	const [theme, setTheme] = useState(lightTheme); // default to light theme

	// Toggle theme function
	const toggleTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	};

	// Existing App logic
	const [pokemonData, setPokemonData] = useState<Pokemon[]>(data);
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
					toggleTheme={toggleTheme} // Pass the toggle function to Header
				/>
				<AllPokemon pokemonData={pokemonData} isShiny={isShiny} />
			</div>
		</ThemeProvider>
	);
};

export default App;
