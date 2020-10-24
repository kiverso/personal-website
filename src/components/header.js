import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import NavLink from "./nav_link"

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
      <ul>
        <li>
          <Link to="/">
            <img src = {logo} alt="site logo" width="40" height="40" className="nav-logo"></img>
          </Link>
        </li>
        <li>
          <NavLink linkText="Blog" linkDestination="/blog">
          </NavLink>
        </li>
      </ul>
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
