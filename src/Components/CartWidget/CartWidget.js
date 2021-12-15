import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  let itemsInCart = 0;

  items.map((item) => {
    return (itemsInCart = itemsInCart + item.qty);
  });

  return (
    <div>
      <div>{itemsInCart}</div>
      <a href=".">
        <Icon name="cart" size="large" />
      </a>
    </div>
  );
};

export default CartWidget;
