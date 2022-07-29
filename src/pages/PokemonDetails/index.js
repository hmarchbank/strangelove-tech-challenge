import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null)

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`)
            .then(pokemonDetails => {
                console.log(pokemonDetails.data)
                setPokemon(pokemonDetails.data)
            })
    })

    const {pokeNumber} = useParams()
    console.log(pokemon)
    return <>
    {pokemon === null ? <h1>Loading pokemon....</h1> :
    <>
        <h1>{pokemon.name}</h1>
        <h1>{pokemon.weight}</h1>
        <h1>{pokemon.height}</h1>
        {/* <h1>{pokemon.moves}</h1> */}
        <h1>{pokemon.name}</h1>
    </>
    }
    </>
}

export default PokemonDetails