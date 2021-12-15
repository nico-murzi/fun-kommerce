import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <h1>FUNKO-MMERCE</h1>
      <Navbar />
    </div>
  );
};

export default Header;
