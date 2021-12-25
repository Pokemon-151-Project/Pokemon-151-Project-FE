import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from './data';

//importing components
import Header from './components/Header';
import AllPokemon from './components/AllPokemon';
import SmolBeans from './components/SmolBeans';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllPokemon/>
      {/* <SmolBeans/> */}
    </div>
  );
}

export default App;
