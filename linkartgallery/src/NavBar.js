import React from 'react';
import { NavLink } from 'react-router-dom';//create navigational links that integrate with React Router

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/gallery" className="nav-link">
        GALLERY
      </NavLink>
      <NavLink to="/about" className="nav-link" >
        ABOUT US
      </NavLink>
      <NavLink to="/cart" className="nav-link" >
        MY CART
      </NavLink>
      <NavLink to="/wishlist" className="nav-link" >
        MY WISHLIST
      </NavLink>
    </nav>
  );
}

export default NavBar;
