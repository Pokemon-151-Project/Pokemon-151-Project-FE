import React from "react";
import pokemon from "../data";
import SinglePokemon from "./SinglePokemon";

//This will be similar to AllPokemon but only display small ones, maybe less than 1kg? still figuring out how exactly to do this.

const smolData =  pokemon.filter(item =>{
    return item.type[0] === 'Fire'
})
// console.log('Pokemon:', pokemon[0]) 

const SmolBeans = props =>{
    //This is just a prototype proof of concept filter. It does display only fire types. So for each function I should be able to change the filter to whatever I want, and copy-paste. Or maybe I can do this even more smartly? It wouldn't be very DRY to write a slightly different component for each filter option, hmm.
        return(
           <section className='all-pokemon'>
           { smolData.map(poke =>{
                return(<SinglePokemon poke = {poke} key = {poke.name}/>)
           })}
        </section>
    
            )
    };

export default SmolBeans;