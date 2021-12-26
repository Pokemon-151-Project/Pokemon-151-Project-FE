import React from "react";
// import pokemon from "../data";
import SinglePokemon from "./SinglePokemon";

//This will be similar to AllPokemon but only display small ones, maybe less than 1kg? still figuring out how exactly to do this.

// console.log('Pokemon:', pokemon[0])

const SmolBeans = (props) => {
  const { pokemon } = props;

  const smolData = pokemon.filter((item) => {
    const weightInt = item.weight.split(" ")[0];
    console.log(weightInt);
    // console.log(item.weight);
    return weightInt < 5;
  });

  return (
    <section className="all-pokemon">
      {smolData.map((poke) => {
        return <SinglePokemon poke={poke} key={poke.name} />;
      })}
    </section>
  );
};

export default SmolBeans;
