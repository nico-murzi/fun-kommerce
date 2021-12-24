import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";
import imgCart from "./goku-blanco-cart.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  let itemsInCart = 0;

  items.map((item) => {
    return (itemsInCart = itemsInCart + item.qty);
  });

  return (
    <div>
      <h3>{itemsInCart}</h3>
      <a href=".">
        <img src={imgCart} alt="" className="gokuCart" />
      </a>
    </div>
  );
};

export default CartWidget;
