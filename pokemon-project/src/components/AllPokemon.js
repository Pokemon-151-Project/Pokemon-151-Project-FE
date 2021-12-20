import React from 'react'
import SinglePokemon from './SinglePokemon';
import pokemon from '../data';


const AllPokemon = (props) =>{
    // const {pokemon} = props;
    console.log('Pokemon:', pokemon)
    return(
       pokemon.map(poke =>{
        //    return(<SinglePokemon pokemon = {poke}/>)
        return(<SinglePokemon poke = {poke}/>)
       })
        )
};

export default AllPokemon;