import React, { useState, useEffect, useContext } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";

const ItemList = ({ categoryID }) => {
  const [items, setItems] = useState([]);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${categoryID}&limit=16`
    )
      .then((response) => response.json())
      .then((json) => setItems(json.results));
  }, []);

  return (
    <div className="CardContainer">
      <div className="CardUser">
        {items.map((item) => (
          <div className="CardUser2" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
            <Button animated="vertical" onClick={addItem} className="btnCart">
              <Button.Content hidden className="btnCart">
                Shop
              </Button.Content>
              <Button.Content visible className="carritoBtn">
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
