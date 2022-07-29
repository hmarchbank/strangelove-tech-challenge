import { NavLink } from "react-router-dom"
import PokemonTile from "../../components/PokemonTile"
import "./index.css"

const Homepage = (props) => {
    console.log(props.pokemon)
    return <>
        <div className="pokemon-grid">
            {props.pokemon === null 
            ? <h1>Loading</h1>
            : props.pokemon.map( (pokemon, index) => {
                pokemon = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
              return <>
                <PokemonTile pokemon={pokemon} index={index}/>
              </>
            })  }
        </div>
    </>
}

export default Homepage