import React from 'react'

const SinglePokemon = props =>{
    const {poke} = props;

    // console.log('SinglePOkemon props:', props)
    
    return (
        <section>
            <div>{poke.name}</div>
            <img src= {poke.img}/>
            {poke.type[1]? <div>Types: {poke.type[0]} / {poke.type[1]} </div> : <div>Type: {poke.type}</div>}
        </section>
    )
}

export default SinglePokemon;
