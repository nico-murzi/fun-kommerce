import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header />
        <Navbar />
          <Routes>
            <Route></Route>
          </Routes>
        </Router>
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
    );
  }
}

export default App;
