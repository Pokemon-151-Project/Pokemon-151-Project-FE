import React from 'react'

const SinglePokemon = props =>{
    const {poke} = props;

    console.log('SinglePOkemon props:', props)
    
    return <div>{poke.name}</div>
}

export default SinglePokemon;
