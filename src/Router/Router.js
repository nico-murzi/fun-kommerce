import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../Views/Cart";
import DCCategory from "../Views/DCCategory";
import Home from "../Views/Home";
import MarvelCategory from "../Views/MarvelCategory";
import DragonBallCategory from "../Views/DragonBallCategory";
import Header from "../Components/Header/Header";
import ItemDetail from "../Components/ItemDetail/ItemDetail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marvel" element={<MarvelCategory />} />
            <Route path="/dc" element={<DCCategory />} />
            <Route path="/dragonball" element={<DragonBallCategory />} />
            <Route path="/detail/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
