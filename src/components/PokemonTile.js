import { NavLink } from "react-router-dom"

const PokemonTile = (props) => {
    console.log(props)
    return <div className="pokemon-tile">
       <h3>Pokedex #{props.index+1}</h3>
       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index+1}.png`} />
       <h1>{props.pokemon}</h1>
        <NavLink id="link" to={`/pokemon/${props.index+1}`}>More details</NavLink>
    </div>
}

export default PokemonTile