import React from "react";
import SinglePokemon from "./SinglePokemon";

const AllPokemon = (props) => {
  //props.pokemon is the data object containing all the pokemon's info
  const { pokemon, shiny } = props;
  return (
    <section className="all-pokemon">
      {pokemon.map((poke) => {
        // This returns 151 cards, each containing a different pokemon. So AllPokemon is the parent container for all these cards.
        return (
          <SinglePokemon
            poke={poke}
            key={poke.name}
            data-testid="single-pokemon"
            shiny={shiny}
          />
        );
      })}
    </section>
  );
};
export default AllPokemon;
