import React from "react";
import "./Navbar.css";
import { Icon } from "semantic-ui-react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containerNav">
      <ul>
        <li>
          <NavLink to="/">
            <Icon name="home" size="large" /> Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/marvel">Marvel</NavLink>
        </li>
        <li>
          <NavLink to="/DC">DC</NavLink>
        </li>
        <li>
          <NavLink to="/series">Dragon Ball</NavLink>
        </li>
      </ul>
      <div className="cartWidget">
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
