import React from "react";
import { Card, Image } from "semantic-ui-react";

const Item = ({ data }) => (
  <Card style={{ height: 450 }} className="imageCard">
    <Image src={data.thumbnail} wrapped ui={false} style={{ height: 290 }} />
    <Card.Content>
      <Card.Header className="priceContainer">
        <span className="price">${data.price}</span>
      </Card.Header>
      <Card.Header>{data.title}</Card.Header>
      <Card.Description>{data.quantity}</Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
