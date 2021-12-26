import React from "react";
import pokemon from "../data";
import SinglePokemon from "./SinglePokemon";

//This will be similar to AllPokemon but only display small ones, maybe less than 1kg? still figuring out how exactly to do this.

// console.log('Pokemon:', pokemon[0])

const SmolBeans = (props) => {
  const { pokemon } = props;

  const smolData = pokemon.filter((item) => {
    return item.type[0] === "Fire";
  });
  //This is just a prototype proof of concept filter. It successfully displays only fire types. But the issue is, as it stands I have to make a bunch of slightly-different components each with a unique filter. I think maybe I can just use one mega-component and change the data passed in through props. Will probably use that by setting the data to State in App.js, then set State with functions based on what filter the user clicks.
  // -Maybe use State in App.js to determine which props to pass in, and that can tell AllPokemon.js which pokes to display?

  return (
    <section className="all-pokemon">
      {smolData.map((poke) => {
        return <SinglePokemon poke={poke} key={poke.name} />;
      })}
    </section>
  );
};

export default SmolBeans;
