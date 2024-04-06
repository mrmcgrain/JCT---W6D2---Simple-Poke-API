import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Pokemon from './components/PokeCard'


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [info, setInfo] = useState(pokemon)
  const [input, setInput] = useState('')

  const handleChanges = (e) => {

    setInput(e.target.value)
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=1&limit=${input}`)

      .then((response) => { setPokemon(response.data.results); })
      .catch(err => console.log(err))

  }, [input])

  return (
    <>
      <h2>Into the Poke Verese</h2>
      <input type='text' placeholder='How many do you want?' onChange={handleChanges} /> 

      {console.log(pokemon)}



      {pokemon.map((pok, index) => (
        <Pokemon key={index} url={pok.url} name={pok.name} />
      ))}

    </>
  )
}

export default App
