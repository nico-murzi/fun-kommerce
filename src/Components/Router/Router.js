import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../Views/Cart";
import DCCategory from "../../Views/DCCategory";
import Home from "../../Views/Home";
import MarvelCategory from "../../Views/MarvelCategory";
import SeriesCategory from "../../Views/SeriesCategory";
import Header from "../Header/Header";
import ItemDetail from "../ItemDetail/ItemDetail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marvel" element={<MarvelCategory />} />
            <Route path="/DC" element={<DCCategory />} />
            <Route path="/series" element={<SeriesCategory />} />
            <Route path="/detail/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
