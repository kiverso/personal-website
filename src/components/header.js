import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.svg"
import Burger from "./burger"

const Header = ({ siteTitle, menuLinks }) => {
  const [open, setOpen] = useState(false);
  return(
    <header className="header">
      <Link to="/">
        <img src = {logo} alt="site logo" width="40" height="40" className="nav-link logo"></img>
      </Link>
      <nav className="nav">
        {menuLinks.map(link => (
          <Link to={link.link} key={link.name} className="nav-link">
            {link.name}
          </Link>
        ))}
      </nav>
      <Burger open = {open} setOpen = {setOpen}/>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
