import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import '../css/header.css'

//some additional logic to verify you are in the home URI  
const checkActive = (match, location) => {
  if(!location) return false;
  const {pathname} = location;
  return pathname === "/";
}

const Header = () => {
  return (
    <div className="appHeader">
      <header>
        <nav>
          <BrowserRouter>
            <div id="links">
              <NavLink className="navLink" isActive={checkActive} activeClassName="curRoute" to="/">
                Home
              </NavLink>
              <NavLink className="navLink" activeClassName="curRoute" to="/analysis">
                Analysis
              </NavLink>
              <NavLink className="navLink" activeClassName="curRoute" to="/counter-claim">
                Counter Claims
              </NavLink>
            </div>
          </BrowserRouter>
        </nav>
      </header>
    </div>
  );
};

export default Header;
