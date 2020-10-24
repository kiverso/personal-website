import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="nav-content site-content">
      <Link to="/">
        <img src = {logo} alt="site logo" width="40" height="40" className="nav-logo"></img>
      </Link>
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
