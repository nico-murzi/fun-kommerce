import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DCCategory from "./Views/DCCategory";
import SeriesCategory from "./Views/SeriesCategory";
import Home from "./Views/Home";
import MarvelCategory from "./Views/MarvelCategory";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Cart from "./Views/Cart"
import {ItemsProvider} from './Components/CartContext/CartContext'

class App extends Component {
  render() {
    return (
      <ItemsProvider>
      <Router>
          <div className="App">
        <Header />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/marvel' element={<MarvelCategory />} />
            <Route path='/DC' element={<DCCategory />} />
            <Route path='/series' element={<SeriesCategory />} />
            <Route path='/detail/:id' element={<ItemDetail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </div>
        </Router>
        </ItemsProvider>
    );
  }
}

export default App;
