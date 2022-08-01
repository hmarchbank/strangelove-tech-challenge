import { NavLink } from "react-router-dom"

const Buttons = (props) => {
    const {pokeNumber, type} = props


    if (type === "next-previous"){

        return <div className="navigation-buttons">
        {pokeNumber === '1'
            ? ''
            : <NavLink to={`/pokemon/${parseInt(pokeNumber) - 1}`}><button className="navigation-btn">Previous Pokemon</button></NavLink>
        }
        {pokeNumber === '20'
            ? <br />
            : <><NavLink to={`/pokemon/${parseInt(pokeNumber) + 1}`}><button className="navigation-btn">Next Pokemon</button></NavLink><br /></>
        }
        </div>
    } else if (type === "homepage"){
        return <div className="navigation-buttons">
            <NavLink to={`/`}><button id="homepage" className="navigation-btn">Homepage</button></NavLink>
        </div>
    }


}

export default Buttons