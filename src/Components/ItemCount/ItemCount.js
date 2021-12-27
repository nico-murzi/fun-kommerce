import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
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
        <div className="counterJoystick">
          <Button negative className="btn" onClick={counterDown}>
            -
          </Button>
          <p className="counter"> {qty} </p>
          <Button positive className="btn" onClick={counterUp}>
            +
          </Button>
        </div>
        <Link to="/cart">
          <Button inverted color="green" onClick={() => addItem(item, qty)}>
            Agregar al carrito
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
