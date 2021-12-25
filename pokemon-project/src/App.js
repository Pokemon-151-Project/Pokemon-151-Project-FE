import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

//importing components
import Header from './components/Header';
import AllPokemon from './components/AllPokemon';
import SmolBeans from './components/SmolBeans';

function App() {
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
      {/* <AllPokemon/> */}
      <SmolBeans/>
    </div>
  );
}

export default App;
