import React from 'react'

const SinglePokemon = props =>{
    //Each poke is a single pokemon's data, being passed in as props.
    const {poke} = props;

    // console.log('SinglePOkemon props:', props)
    
    return (
        <section className='pokemon-card'>
            {/* Name of each pokemon */}
            <div>{poke.name}</div>

            {/* This returns basic type information. Singular if only one type, plural if two types. */}
            {poke.type[1]? <div>Types: {poke.type[0]} / {poke.type[1]} </div> : <div>Type: {poke.type}</div>}

            {/* image of each pokemon */}
            <img src= {poke.img}/>
        </section>
    )
}

export default SinglePokemon;
