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
