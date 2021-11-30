import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
        <img src={item.thumbnail} alt={item.title} width={300}/>
        <h1>{item.title}</h1>
        <h2>${item.price}</h2>
    </div>
  );
};

export default ItemDetail;
