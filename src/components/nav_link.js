import { Link } from 'gatsby';
import React from 'react';

const NavLink = ({linkText, linkDestination}) => {
return <div className="nav-link" >
  <Link to={linkDestination}>{linkText}</Link>
</div>;
};

export default NavLink;