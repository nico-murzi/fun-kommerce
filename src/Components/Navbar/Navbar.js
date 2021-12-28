import React from "react";
import "./Navbar.css";
import { Icon } from "semantic-ui-react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import img from "./Marvel-logo.png";
import img2 from "./DC.png";
import img3 from "./dragon.png";
import img4 from "./harry-potter-logo.png";
import img5 from "./simpsons.png";

const Navbar = () => {
  return (
    <div className="containerNav">
      <ul>
        <li>
          <NavLink to="/">
            <Icon name="home" size="huge" className="home" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/marvel">
            <img src={img} alt="" className="marvel" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dc">
            <img src={img2} alt="" className="dc" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dragonball">
            <img src={img3} alt="" className="dragon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-simpsons">
            <img src={img5} alt="" className="simpsons" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/harry-potter">
            <img src={img4} alt="" className="harry" />
          </NavLink>
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
