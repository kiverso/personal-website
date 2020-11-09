import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import logo from "../images/logo_alt.svg"
import Burger from "./burger"

const Header = ({ siteTitle, menuLinks }) => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if ( mediaQuery.matches ) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  return(
    <header className="header">
      <Link to="/">
        <img src = {logo} alt="site logo" width="40" height="40" className="nav-link logo"></img>
      </Link>
      <CSSTransition
        in={ open || !mobile }
        timeout={250}
        classNames="navAnimation"
        unmountOnExit>
          <nav className="nav">
            {menuLinks.map(link => (
              <Link to={link.link} key={link.name} className="nav-link">
                {link.name}
              </Link>
            ))}
          </nav>
        </CSSTransition>
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
