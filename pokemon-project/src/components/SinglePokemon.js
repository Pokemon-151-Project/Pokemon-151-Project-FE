import React from 'react'

const SinglePokemon = props =>{
    const {poke} = props;

    // console.log('SinglePOkemon props:', props)
    
    return (
        <section>
            <div>{poke.name}</div>
            <img src= {poke.img}/>
            <div>{ {poke.type[1]?} `Types: {poke.type[0]}, {poke.type[1]}`</div>
        </section>
    )
}

export default SinglePokemon;
