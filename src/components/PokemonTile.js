import { NavLink } from "react-router-dom"

const PokemonTile = (props) => {
    return <div className="pokemon-tile">
       <h2>#{props.index+1}</h2>
       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index+1}.png`} />
       <h2>{props.pokemon}</h2>
        <NavLink id="link" to={`/pokemon/${props.index+1}`}><button class="more-btn">More details</button></NavLink>
    </div>
}

export default PokemonTile