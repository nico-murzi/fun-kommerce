//IMPORTS
import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (categoryID) => {
  return (
    <div className="CardContainer">
      <div className="CardUser">
        <div>
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
