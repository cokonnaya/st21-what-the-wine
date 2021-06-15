import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Wines">Wines</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
            <div>
              Copyright 2021 - The greatest, rocking What the Wine Team.
            </div>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;

// This is the footer with some information about the project
