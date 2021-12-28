import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../Views/Cart";
import DCCategory from "../Views/DCCategory";
import Home from "../Views/Home";
import MarvelCategory from "../Views/MarvelCategory";
import DragonBallCategory from "../Views/DragonBallCategory";
import Header from "../Components/Header/Header";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import Footer from "../Components/Footer/Footer";
import HarryPotterCategory from "../Views/HarryPotterCategory";
import TheSimpsonsCategory from "../Views/TheSimpsonsCategory";

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
            <Route path="/the-simpsons" element={<TheSimpsonsCategory />} />
            <Route path="/harry-potter" element={<HarryPotterCategory />} />
            <Route path="/detail/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
