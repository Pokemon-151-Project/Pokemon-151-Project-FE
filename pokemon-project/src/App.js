import React, { useState } from "react";
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";

//This is the original data of the 151 pokemon I'm displaying.
import data from "./data";

function App() {
  //sets the pokemon data to state. Updates based on user preference
  const [pokemon, setPokemon] = useState(data);
  // Boolean that user can update via button clickto display shiny forms of pokemon
  const [isShiny, setIsShiny] = useState(false);

  //Allows the user to press a button in the header dropdown to show only pokemon of a certain type, height, or size.
  const changeDisplay = (type = null, size = null, height = null) => {
    const newData = data.filter((item) => {
      if (type) {
        return item.type[0] === type || item.type[1] === type;
      } else if (size) {
        const weightInt = item.weight.split(" ")[0];
        return size === "small" ? weightInt < 5 : weightInt > 100;
      } else if (height) {
        const heightInt = item.height.split(" ")[0];
        return height === "short" ? heightInt < 0.4 : heightInt > 2;
      }
      return null;
    });
    setPokemon(newData);
  };

  return (
    <div className="App">
      <Header
        changeDisplay={changeDisplay}
        setIsShiny={setIsShiny}
        isShiny={isShiny}
      />
      <AllPokemon pokemon={pokemon} isShiny={isShiny} />
    </div>
  );
}

export default App;
