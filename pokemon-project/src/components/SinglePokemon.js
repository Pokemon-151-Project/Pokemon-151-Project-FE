import React from 'react'

const SinglePokemon = props =>{
    const {poke} = props;

    // console.log('SinglePOkemon props:', props)
    
    return (
        <section>
            <div>{poke.name}</div>
            <img src= {poke.img}/>
        </section>
    )
}

export default SinglePokemon;
