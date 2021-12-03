import React from "react";
import { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = () => {
  let IDProduct = useParams();

  let IDProductDetail = IDProduct.id;

  const [productDetail, setProductDetail] = useState([]);

  console.log(productDetail);
  console.log(productDetail.id);

  useEffect(() => {
    axios(`https://api.mercadolibre.com/items/${IDProductDetail}`).then((res) =>
      setProductDetail(res.data)
    );
  }, [IDProductDetail]);

  return (
    <div className="detail">
      <Card key={productDetail.id}>
        <Image src={productDetail.thumbnail} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{productDetail.title}</Card.Header>
          <Card.Meta>
            <span className="date">$ {productDetail.price}</span>
          </Card.Meta>
          <Card.Description>Stock: {productDetail.quantity}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemDetail;
