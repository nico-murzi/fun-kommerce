import React from "react";
import { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router";

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
    <div>
      <h1>Detalle de producto</h1>
      {productDetail.map((product) => {
        return (
          <Card key={product.id}>
            <Image src={product.thumbnail} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{product.title}</Card.Header>
              <Card.Meta>
                <span className="date">$ {product.price}</span>
              </Card.Meta>
              <Card.Description>Stock: {product.quantity}</Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemDetail;
