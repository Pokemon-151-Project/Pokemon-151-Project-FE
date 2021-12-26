import React from "react";

const SinglePokemon = (props) => {
  //Each poke is a single pokemon's data, being passed in as props.
  const { poke } = props;

  //destructuring the keys in poke to make my JSX a little more concise
  const { type, img, dexEntry } = poke;

  return (
    <div className="pokemon-card">
      {/* Pokemon's name */}
      <h2 className="poke-name">{poke.name}</h2>

      {/* This returns basic type information. Singular if only one type, plural if two types. */}
      {poke.type[1] ? (
        <h3>
          Types: {type[0]} / {type[1]}{" "}
        </h3>
      ) : (
        <h3>Type: {type}</h3>
      )}

      {/* image of each pokemon */}
      <img className="poke-img" src={img} alt="Pokemon" />

      {/* I now have added pokedex entries to each pokemon. Will uncomment this when I"ve added styling to this bit. Specifically, I only want a preview to show up, then the full entry when you hover over it.*/}
      <p>{dexEntry}</p>
    </div>
  );
};

export default SinglePokemon;
