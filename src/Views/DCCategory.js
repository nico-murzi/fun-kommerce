import React, { useState, useEffect } from "react";
import { Button, Icon, Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../ViewsCSS/DCCategory.css";

const DCCategory = () => {
  const [itemsDC, setItemsDC] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=funko%20DC&limit=12")
      .then((response) => response.json())
      .then((json) => setItemsDC(json.results));
  }, []);

  console.log(itemsDC);

  const addItem = () => {
    alert(`Agregaste un item`);
  };

  return (
    <div className="CardContainer">
      <div className="CardUser">
        {itemsDC.map((itemDC) => (
          <div className="CardUser2" key={itemDC.id}>
            <Link to={`/detail/${itemDC.id}`}>
              <Item data={itemDC} />
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

export default DCCategory;
