//IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <Link to="/" className="Header">
        <h1 className="titleHeader">FUNKO-MMERCE</h1>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
