import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>Random Pokemon</NavLink>
    </>
}

export default Navbar