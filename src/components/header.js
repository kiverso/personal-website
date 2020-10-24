import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <div className="nav-content site-content">
      <Link to="/">
        <img src = {logo} alt="site logo" width="40" height="40" className="nav-link"></img>
      </Link>
      <nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}
             className="nav-link"
            >
              <Link to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
