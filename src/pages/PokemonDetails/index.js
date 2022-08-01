import {useParams} from "react-router-dom"
import axios from "axios"
import './index.css'
import { useState, useEffect } from "react"
import { capitalise, getMeasurement } from "../../utilities/utilityFunctions"
import Buttons from "../../components/Buttons.js"
import Loading from "../../components/Loading"


const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null)
    const { pokeNumber } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`)
            .then(pokemonDetails => {
                setPokemon(pokemonDetails.data)
            })
            .catch(err => {
                console.log('problem getting pokemon from DB', err)
            })
    }, [pokeNumber])

    return <>
        {pokemon === null ? <Loading /> :
            <div className="flex-container">
                <Buttons type="homepage"/>
                <div className="flex-cols">
                    <div className="image-col col">
                        <div className="text-container">
                            <h1 className="title">{capitalise(pokemon.name)}</h1>
                            <div className="img-flex">
                                <img alt={`frontside sprite of ${pokemon.name}`} src={pokemon.sprites.front_default} /><br />
                                <img alt={`backside sprite of ${pokemon.name}`} id="backImage" src={pokemon.sprites.back_default} />
                            </div>
                        </div>
                    </div>
                    <div className="details-col col">
                        <div className="text-container">
                            <h2>Details</h2>
                            <p>Pokedex No. {pokeNumber}</p>
                            <p>Weight: {getMeasurement(pokemon.weight)}kg</p>
                            <p>Height: {getMeasurement(pokemon.height)}m</p>
                            <p>Abilities:</p>
                            <ul>
                                {pokemon.abilities.map((ability, index) => {
                                    return <li key={index}>{capitalise(ability.ability.name)}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="move-col col">
                        <div className="text-container">
                            <h2>Moveset</h2>
                            <ul>
                                {pokemon.moves.map((move, index) => {
                                    if (index > 10) {
                                        return ''
                                    }
                                    return <li key={index}>{capitalise(move.move.name)}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <Buttons pokeNumber={pokeNumber} type="next-previous" />
            </div>
        }
    </>
}

export default PokemonDetails