import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'

const ItemList = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=funko&limit=12")
      .then((response) => response.json())
      .then((json) => setItems(json.results));
  }, []);

  console.log(items)


  const addItem = () => {
    alert(`Agregaste un item`);
  }

  return (
    <div className="CardContainer">
      <div className="CardUser">
        {items.map((item) => (
          <div className="CardUser2" key={item.id}> 
            <Link to={`/detail/${item.id}`}>
            <Item data={item} />
            </Link>
            <Button animated='vertical' onClick={addItem} className='btnCart'>
             <Button.Content hidden className='btnCart'>Shop</Button.Content>
             <Button.Content visible className='carritoBtn'>  
                <Icon name='shop' />
             </Button.Content>
            </Button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
