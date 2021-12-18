import React from 'react'

const AllPokemon = (props) =>{
    const {pokemon} = props;
    console.log('AllPokemon props:', pokemon)
    return(
        pokemon.map(poke =>{return <div>{poke.name}</div>})
    )
};

export default AllPokemon;