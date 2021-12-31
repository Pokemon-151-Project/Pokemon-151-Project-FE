import React from "react";

const SinglePokemon = (props) => {
  //Each poke is a single pokemon's data, being passed in as props.
  const { poke } = props;

  //destructuring the keys in poke to make my JSX a little more concise
  const { name, type, img, dexEntry, height, weight, id } = poke;

  return (
    <div className="pokemon-card">
      {/* Pokemon's name */}
      <h2 className="poke-name card-item">
        {name} <span className="dex-id">#{id}</span>
      </h2>

      {/* This returns basic type information. Singular if only one type, plural if two types. */}
      {type[1] ? (
        <h3 className="poke-type card-item">
          Types: {type[0]} / {type[1]}{" "}
        </h3>
      ) : (
        <h3 className="poke-type card-item">Type: {type}</h3>
      )}

      {/* Returns info about weight and height */}
      <h4 className="height-weight card-item">
        Height: {height} <br />
        Weight: {weight}
      </h4>

      {/* image of each pokemon */}
      <img className="poke-img card-item" src={img} alt="Pokemon" />

      {/* Returns the pokemon's dex entry, which is basic tidbits about the pokemon */}
      <p className="card-item">{dexEntry}</p>
    </div>
  );
};

export default SinglePokemon;
