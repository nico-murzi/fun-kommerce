import React, { useState, useEffect, useContext } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";

// Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const { addItem, scrollTop } = useContext(CartContext);

  useEffect(() => {
    const getFunkoData = async () => {
      const q = query(collection(db, "funko"));
      const querySnapshot = await getDocs(q);
      const dataF = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataF.push({ ...doc.data() });
      });
      setItems(dataF);
    };
    getFunkoData();
  }, []);

  return (
    <div className="CardContainer">
      <div className="CardUser">
        {items.map((funko) => (
          <div className="CardUser2" key={funko.id}>
            <Link to={`/detail/${funko.id}`} onClick={scrollTop}>
              <Item data={funko} />
            </Link>
            <Button
              animated="vertical"
              className="shopBtn"
              onClick={() => addItem(funko, 1)}
            >
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
