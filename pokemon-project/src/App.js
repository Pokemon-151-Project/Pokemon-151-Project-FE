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

//proof of concept for adding pokedex entries. I need to find an API with pokedex entries, and use this method to add said entries to data, then replace the original data.js with the new object.

data.forEach(item =>{
  let newData = data;
  // console.log(item.name)

  axios.get(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${item.name}`)
    .then(res =>{
      console.log(res.data.info.id)
      console.log('Data with id:', newData[res.data.info.id -1]) 
      newData[res.data.info.id -1].dexEntry = res.data.info.description;
      // console.log('newData:', newData)
      console.log('New Data:', newData)
    })
    .catch(err=>{
      console.log(err)
    });
})


  return (
    <div className="App">
      <Header/>
      <AllPokemon/>
      {/* <SmolBeans/> */}
    </div>
  );
}

export default App;
