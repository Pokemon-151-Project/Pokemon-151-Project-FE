import React, { useState } from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";

//This is the original data of the 151 pokemon I'm displaying. It gets updated and passed to state based on what display options the user clicks.
import data from "./data";

function App() {
  //sets the pokemon data to state. It starts as the original data but my hope is that I can update it based on filters.
  const [pokemon, setPokemon] = useState(data);
  const [shiny, setShiny] = useState(false);

  console.log("App Shiny:", shiny);

  //This function is the heart of the entire project. It allows you to press a button in the header dropdown to show only pokemon of a certain type, height, or size.
  //If a type is passed in, it sorts by that type. If a size is passed in, it sorts by that size. If a height is passed in, it osrts by that size. Nothing else will ever be passed in unless the code is written with more button options.
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
      //I don't think returning null is necsesary here but VSCode gave me a warning until I did it.
      return null;
    });
    setPokemon(newData);
  };

  return (
    <div className="App">
      <Header changeDisplay={changeDisplay} setShiny={setShiny} shiny={shiny} />
      <AllPokemon pokemon={pokemon} shiny={shiny} />
    </div>
  );
}

export default App;
