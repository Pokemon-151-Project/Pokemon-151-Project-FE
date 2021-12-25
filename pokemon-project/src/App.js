import React from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";

import pokemon from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <AllPokemon pokemon={pokemon} />
      {/* <SmolBeans/> */}
    </div>
  );
}

export default App;
