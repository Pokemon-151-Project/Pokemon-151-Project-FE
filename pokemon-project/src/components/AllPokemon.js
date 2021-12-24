import React from 'react'
import SinglePokemon from './SinglePokemon';
import pokemon from '../data';


const AllPokemon = () =>{
    console.log('Pokemon:', pokemon[0])
    return(
        <div>
            pokemon.map(poke =>{
            return(<SinglePokemon poke = {poke} key = {poke.name}/>)
       })
        </div>
        )
};

export default AllPokemon;