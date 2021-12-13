import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router";
import "../ItemDetail/ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = () => {
  let IDProduct = useParams();

  let IDProductDetail = IDProduct.id;

  const [productDetail, setProductDetail] = useState([]);
  const [add, setAdd] = useState(false);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    axios(`https://api.mercadolibre.com/items/${IDProductDetail}`).then((res) =>
      setProductDetail(res.data)
    );
  }, [IDProductDetail]);

  return (
    <div className="detail">
      <Card key={productDetail.id} className="cardSize">
        <div className="imageContainer">
          <Image src={productDetail.thumbnail} wrapped ui={false} />
        </div>
        <Card.Content>
          <Card.Header>{productDetail.title}</Card.Header>
          <Card.Meta>
            <span className="date">$ {productDetail.price}</span>
          </Card.Meta>
          <Card.Description>
            Stock: {productDetail.sold_quantity}
          </Card.Description>
        </Card.Content>

        {!add ? (
          <div>
            <ItemCount
              item={productDetail}
              stock={10}
              initial={1}
              addItem={addItem}
            />
          </div>
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
      </Card>
    </div>
  );
};

export default ItemDetail;
