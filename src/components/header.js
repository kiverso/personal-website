import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "gray",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        maxHeight: '2.5em',
        paddingLeft: 10
      }}
    >
      <Link
        to="/"
      >
        <img src = {logo} alt="site logo" width="40" height="40"></img>
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
