import { useState } from "react"
import PokemonTile from "../../components/PokemonTile"
import "./index.css"
import {capitalise} from "../../utilities/utilityFunctions"
import Loading from "../../components/Loading"

const Homepage = (props) => {
    const [searchInput, setSearchImput] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        setSearchImput(event.target.value.toLowerCase())
    }


    return <>
        <header>
            <h1 id="mainTitle">Pokedex</h1>
            <label>Search for your favourite Pokemon by name<br/>
                <input placeholder="Pokemon name" onChange={handleChange}/>
            </label>
        </header>
        <div className="pokemon-grid">
            {props.pokemon === null
            ? <Loading />
            : props.pokemon.map( (pokemon, index) => {
                if (pokemon.name.includes(searchInput)){
                    return <>
                        <PokemonTile pokemon={capitalise(pokemon.name)} index={index}/>
                    </>
                } else {
                    return ''
                }
            })}
        </div>
    </>
}

export default Homepage