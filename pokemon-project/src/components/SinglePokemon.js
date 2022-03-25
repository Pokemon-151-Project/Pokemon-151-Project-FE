// This component displays a single pokemon with images and basic data.
import React from "react";

const SinglePokemon = (props) => {
  const { poke, isShiny } = props;
  const { name, type, dexEntry, height, weight, id, num } = poke;

  return (
    <article className="pokemon-card" data-testid="pokemon-card">
      <h2 className="poke-name card-item">
        {name} <span className="dex-id">#{id}</span>
      </h2>

      {/* Pokemon's type info */}
      {type[1] ? (
        <h3 className="poke-type card-item">
          {type[0]} / {type[1]}{" "}
        </h3>
      ) : (
        <h3 className="poke-type card-item">{type}</h3>
      )}

      <h4 className="height-weight card-item">
        Height: {height} <br />
        Weight: {weight}
      </h4>

      {/* image of each pokemon */}
      <figure className="img-container card-item">
        {/* Displays either the shiny or normal form of the pokemon based on user preference */}
        {isShiny ? (
          <img
            className="poke-img"
            data-testid="shiny"
            src={`https://www.serebii.net/Shiny/SWSH/${num}.png`}
            alt={name}
          />
        ) : (
          <img
            className="poke-img"
            data-testid="not-shiny"
            src={`https://www.serebii.net/swordshield/pokemon/${num}.png`}
            alt={name}
          />
        )}
      </figure>

      <blockquote className="card-item">{dexEntry}</blockquote>
    </article>
  );
};

export default SinglePokemon;
