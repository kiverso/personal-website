import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <nav className="header">
    <div className="nav-content site-content"
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        // maxHeight: '2.5em',
        // paddingLeft: 10
      }}
    >
      <Link
        to="/"
      >
        <img src = {logo} alt="site logo" width="40" height="40" class="nav-logo"></img>
      </Link>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
