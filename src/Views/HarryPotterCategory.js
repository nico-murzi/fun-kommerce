//IMPORTS
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Components/CartContext/CartContext";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import Item from "../Components/Item/Item";

//FIREBASE
import { db } from "../Firebase/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const HarryPotterCategory = () => {
  const [items, setItems] = useState([]);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getFunkoData = async () => {
      const q = query(
        collection(db, "funko"),
        where("universe", "==", "Harry Potter")
      );
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
            <Link to={`/detail/${funko.id}`}>
              <Item data={funko} />
            </Link>
            <Button animated="vertical" className="shopBtn">
              <Button.Content
                hidden
                className="btnCart"
                onClick={() => addItem(funko, 1)}
              >
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

export default HarryPotterCategory;
