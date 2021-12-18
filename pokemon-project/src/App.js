import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
const [pokemon, setPokemon] = useState({});

useEffect( () =>{
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res =>{
      console.log('Res.data.results:', res.data.results)
      setPokemon(res.data.results)
    })
    .catch(err =>{
      console.log('Error:', err)
    })
}, [])
  
console.log(pokemon[0])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
