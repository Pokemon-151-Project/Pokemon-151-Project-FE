import React, { useState } from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";

//This is the original data of the 151 pokemon I'm displaying. It gets updated and passed to state based on what display options the user clicks.
import data from "./data";

//This isn't necessary right now but may be later
// import { useEffect } from "react/cjs/react.development";

function App() {
  //sets the pokemon data to state. It starts as the original data but my hope is that I can update it based on filters.
  const [pokemon, setPokemon] = useState(data);

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
      <Header changeDisplay={changeDisplay} />
      <AllPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
