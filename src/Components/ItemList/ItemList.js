import React, { useContext } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from '../CartContext/CartContext'

const ItemList = () => {
  const [items, setItems] = useContext(CartContext);

  const addItem = () => {
    alert('Agregaste un item');
  }

  return (
    <div className="CardContainer">
      <div className="CardUser">
        {items.map((item) => (
          <div className="CardUser2" key={item.id}> 
            <Link to={`/detail/${item.id}`}>
            <Item data={item} />
            </Link>
            <ItemCount />
              <button className='btnCart' onClick={addItem}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
