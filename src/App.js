import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
