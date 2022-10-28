import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <p className="logo">Math Magicians</p>
      <ul className="nav-link">
        <li className="li" data-testid="li">
          <NavLink to="/" className="NavLink">
            Home
          </NavLink>
        </li>
        <li className="li" data-testid="li">
          <NavLink to="/Calculator" className="NavLink">
            Calculator
          </NavLink>
        </li>
        <li data-testid="li">
          <NavLink to="/Quote" className="NavLink">
            Quote
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
