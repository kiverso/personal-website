import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle, menuLinks }) => (
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
    <div className="burger">
      <div/>
      <div/>
      <div/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
