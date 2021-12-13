import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { CartProvider } from "./Components/CartContext/CartContext";
import Router from "./Components/Router/Router";

class App extends Component {
  render() {
    return (
      <>
        <CartProvider>
          <Router />
        </CartProvider>
      </>
    );
  }
}

export default App;
