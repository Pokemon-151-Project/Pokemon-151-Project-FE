import React, { useState } from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
// import SmolBeans from "./components/SmolBeans";

import data from "./data";

//This isn't necessary right now but may be later
// import { useEffect } from "react/cjs/react.development";

function App() {
  //sets the pokemon data to state. It starts as the original data but my hope is that I can update it based on filters.
  const [pokemon, setPokemon] = useState(data);

  //This is a proof of concept that I can write a function to change state (in this case, the data passed in as props to AllPokemon), set it to onClick for a button and make the button update the displayed pokemon. Need to figure out how to scale this up to a number of different display options.
  const setSmall = () => {
    const newData = pokemon.filter((item) => {
      const weightInt = item.weight.split(" ")[0];
      return weightInt < 5;
    });
    setPokemon(newData);
  };
  //Ideas:
  //+Make separate file for this, pass in pokemon as parameter.
  //-This keeps everything compartmentalized
  //-Problem is, right now I can't call with parameters in onClick. Need to solve that
  //+Pass in multiple parameters:
  //  -One for type of change (type, size, etc) and one for, say, what type or size or whatever is desired. Maybe more.

  return (
    <div className="App">
      <Header setSmall={setSmall} />
      <AllPokemon pokemon={pokemon} />
      {/* <SmolBeans pokemon={pokemon} /> */}
    </div>
  );
}

export default App;

//Notes on saving filtered data to state:
//So, my hope here for display options is to do something like this:
//Make <AllPokemon/> a catch-all component
//It'll display whatever pokes I want to sort by, passed in through props from App
//What pokes it takes in as props is set by the user clicking buttons in Header
//Maybe even have just a few catch-all functions to set state, rather than say, one for each type. Like the "type" catch-all function would take in a type and set the pokemon data to only pokemon of that type.
