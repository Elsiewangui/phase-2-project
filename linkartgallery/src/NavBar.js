import React from 'react';
import { NavLink } from 'react-router-dom';//create navigational links that integrate with React Router

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/gallery" className="nav-link">
        GALLERY
      </NavLink>
      <NavLink to="/about" className="nav-link" >
        ABOUT
      </NavLink>
      <NavLink to="/cart" className="nav-link" >
        CART
      </NavLink>
      <NavLink to="/wishlist" className="nav-link" >
        WISHLIST
      </NavLink>
      <NavLink to="/collection" className="nav-link" >
        COLLECTION
      </NavLink>
    </nav>
  );
}

export default NavBar;
