import React from 'react'

const SinglePokemon = props =>{
    const {poke} = props;

    // console.log('SinglePOkemon props:', props)
    
    return (
        <section>
            {/* Name of each pokemon */}
            <div>{poke.name}</div>

            {/* image of each pokemon */}
            <img src= {poke.img}/>

            {/* This returns basic type information. Singular if only one type, plural if two types. */}
            {poke.type[1]? <div>Types: {poke.type[0]} / {poke.type[1]} </div> : <div>Type: {poke.type}</div>}
        </section>
    )
}

export default SinglePokemon;
