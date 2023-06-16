import {Link } from "react-router-dom"


const Nav = () => {

    return (
        <nav className="Nav">
      <Link className="Main" to="/">
        About
      </Link>
      {' | '}
      <Link className="Projects" to="/Projects">
        Projects
      </Link>
    </nav>
    )
}


export default Nav;