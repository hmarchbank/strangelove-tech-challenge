import Homepage from './pages/Homepage';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetchPokemon();
  }, []);


  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then( (pokemon) => {
        setPokemon(pokemon.data.results)
      })
      .catch((e) => {
        console.log("error getting pokemon from API...", e)
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage pokemon={pokemon}/>}/>
        <Route path="/pokemon/:pokeNumber" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
