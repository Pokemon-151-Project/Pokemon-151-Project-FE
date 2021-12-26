import React from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
import SmolBeans from "./components/SmolBeans";

import pokemon from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AllPokemon pokemon={pokemon} /> */}
      <SmolBeans pokemon={pokemon} />
    </div>
  );
}

export default App;

//So, my hope here for display options is to do something like this:
//Make <AllPokemon/> a catch-all component
//It'll display whatever pokes I want to sort by, passed in through props from App
//What pokes it takes in as props is set by the user clicking buttons in Header
//Maybe even have just a few catch-all functions to set state, rather than say, one for each type. Like the "type" catch-all function would take in a type and set the pokemon data to only pokemon of that type.
