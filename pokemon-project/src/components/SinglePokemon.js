import React from 'react'

const SinglePokemon = props =>{
    //Each poke is a single pokemon's data, being passed in as props.
    const {poke} = props;
    
    return (
        <div className='pokemon-card'>
            {/* Name of each pokemon */}
            <h2 className='poke-name'>{poke.name}</h2>

            {/* This returns basic type information. Singular if only one type, plural if two types. */}
            {poke.type[1]? <p>Types: {poke.type[0]} / {poke.type[1]} </p> : <p>Type: {poke.type}</p>}

            {/* image of each pokemon */}
            <img  className= 'poke-img' src= {poke.img}/>

            {/* I now have added pokedex entries to each pokemon. Will uncomment this when I"ve added styling to this bit. Specifically, I only want a preview to show up, then the full entry when you hover over it.*/}
            {/* <p>{poke.dexEntry}</p> */}
        </div>
    )
}

export default SinglePokemon;
