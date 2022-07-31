import { NavLink } from "react-router-dom"

const Buttons = (props) => {
    const {pokeNumber} = props

    return <div className="navigation-buttons">
        {pokeNumber === '1'
            ? ''
            : <NavLink to={`/pokemon/${parseInt(pokeNumber) - 1}`}><button class="navigation-btn">Previous Pokemon</button></NavLink>
        }
        {pokeNumber === '20'
            ? <br />
            : <><NavLink to={`/pokemon/${parseInt(pokeNumber) + 1}`}><button class="navigation-btn">Next Pokemon</button></NavLink><br /></>
        }
        <NavLink to={`/`}><button class="navigation-btn">Homepage</button></NavLink>
    </div>
}

export default Buttons