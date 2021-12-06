import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [ItemCounter, setItemCounter] = useState(0);

  const counterUp = () => {
    if (ItemCounter < 6) {
      setItemCounter(ItemCounter + 1);
    }
  };

  const counterDown = () => {
    if (ItemCounter > 0) {
      setItemCounter(ItemCounter - 1);
    }
  };

  return (
    <div className="counterSection">
      <div className="counterBtn">
        <button className="btn" onClick={counterDown}>
          -
        </button>
        <p className="counter"> {ItemCounter} </p>
        <button className="btn" onClick={counterUp}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
