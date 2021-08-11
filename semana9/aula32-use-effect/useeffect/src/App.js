import React, { useState, useEffect } from 'react'
import axios from "axios";
import PokeCard from './components/PokeCard';
import { Container } from './components/PokeCard/style';

const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
const App = () => {

  const [pokeList, setPokeList] = useState([])
  const [pokeUrl, setUrl] = useState('')
  const [pokemon, setPokemon] = useState({})
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
    pokemonList()
    async function pokemonList() {
      try {
        const pokemons = await axios.get(url)
        return setPokeList(pokemons.data.results)
      } catch {
        return;
      }
    }
  }, [])

  useEffect(() => {
    pokemonResult()
    async function pokemonResult() {
      try {
        const pokemons = await axios.get(pokeUrl)
        return setPokemon(pokemons.data)
      } catch {
        return;
      }
    }
  }, [pokeUrl])

  const changeName = (event) => {
    setUrl(event.target.value)
    setPokeName(event.target.value)
  }

  return (

    <Container>
      <select value={pokeName} onChange={changeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(({ url, name }, index) => {
          return (

            <option key={index} value={url}>
              {name}
            </option>
          )
        })}

      </select>
      <PokeCard pokemon={pokemon} />
    </Container>
  );
}

export default App;
