import React from "react";
import pokemon from "../data";
import SinglePokemon from "./SinglePokemon";

//This will be similar to AllPokemon but only display small ones, maybe less than 1kg? still figuring out how exactly to do this.

const smolData =  pokemon.filter(item =>{
    return item.type[0] === 'Fire'
})
console.log(smolData)

const SmolBeans = props =>{
    // console.log('Pokemon:', pokemon[0])
        return(
           <section className='all-pokemon'>
           { pokemon.map(poke =>{
                return(<SinglePokemon poke = {poke} key = {poke.name}/>)
           })}
        </section>
    
            )
    };

export default SmolBeans;