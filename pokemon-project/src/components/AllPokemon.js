import React from "react";
import SinglePokemon from "./SinglePokemon";

const AllPokemon = (props) => {
  const { pokemon } = props;
  return (
    <section className="all-pokemon">
      {pokemon.map((poke) => {
        return <SinglePokemon poke={poke} key={poke.name} />;
      })}
    </section>
  );
};

export default AllPokemon;
