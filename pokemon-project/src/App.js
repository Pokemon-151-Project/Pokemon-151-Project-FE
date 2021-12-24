import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from './data';

//importing components
import Header from './components/Header';
import AllPokemon from './components/AllPokemon';

function App() {

//proof of concept for adding pokedex entries. I need to find an API with pokedex entries, and use this method to add said entries to data, then replace the original data.js with the new object.
data.forEach(item =>{
  item = {
    ...item,
    'blah blah blah': 'heebiejeebie'
  }
  console.log(item)
})

// const [pokemon, setPokemon] = useState({});

// useEffect( () =>{
//   axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
//     .then(res =>{
//       // console.log('Res.data.results:', res.data.results)
//       setPokemon(res.data.results)
//     })
//     .catch(err =>{
//       console.log('Error:', err)
//     })
// }, [])
  
// console.log(pokemon[0])


  return (
    <div className="App">
      <Header/>
      <AllPokemon/>
    </div>
  );
}

export default App;
