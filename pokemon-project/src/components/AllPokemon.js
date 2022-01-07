import React from "react";
import SinglePokemon from "./SinglePokemon";

const AllPokemon = (props) => {
  //props.pokemon is the data object containing all the pokemon's info
  const { pokemon, isShiny } = props;
  return (
    <section className="all-pokemon">
      {pokemon.map((poke) => {
        // Returns 151 cards, each containing a different pokemon.
        return (
          <SinglePokemon
            poke={poke}
            key={poke.name}
            data-testid="single-pokemon"
            isShiny={isShiny}
          />
        );
      })}
    </section>
  );
};
export default AllPokemon;
