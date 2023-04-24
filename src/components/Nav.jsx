import {Link } from "react-router-dom"


const Nav = () => {

    return (
        <nav className="Nav">
      <Link className="Main" to="/">
        Main
      </Link>
      {' | '}
      <Link className="Contact" to="/Contact">
        Contact
      </Link>
      {' | '}
      <Link className="Projects" to="/Projects">
        Projects
      </Link>
      {' | '}
    </nav>
    )
}


export default Nav;