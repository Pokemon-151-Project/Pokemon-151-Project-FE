import React from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <AllPokemon />
      {/* <SmolBeans/> */}
    </div>
  );
}

export default App;
