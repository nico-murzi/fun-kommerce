import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({ item, stock, initial, addItem }) => {
  const [qty, setQty] = useState(1);

  const counterUp = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const counterDown = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="counterSection">
      <div className="counterBtn">
        <button className="btn" onClick={counterDown}>
          -
        </button>
        <p className="counter"> {qty} </p>
        <button className="btn" onClick={counterUp}>
          +
        </button>
        <Link to="">
          <button onClick={() => addItem(item, qty)}>Agregar al carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
