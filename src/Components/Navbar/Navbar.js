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
          <NavLink to="/marvel">
            <Icon name="photo" size="large" /> Marvel
          </NavLink>
        </li>
        <li>
          <NavLink to="/DC">
            <Icon name="building" size="large" /> DC
          </NavLink>
        </li>
        <li>
          <NavLink to="/series">
            <Icon name="phone" size="large" /> Series
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
