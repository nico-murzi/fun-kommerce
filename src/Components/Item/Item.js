import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ data }) => (
  <Card style={{ height: 450 }} className="imageCard">
    <Image
      className="imageContainer"
      src={data.img}
      wrapped
      ui={false}
      style={{ height: 290 }}
    />
    <Card.Content>
      <Card.Header className="priceContainer">
        <span className="price">{data.title}</span>
      </Card.Header>
      <Card.Header>U$D {data.price}</Card.Header>
      <Card.Description>{data.quote}</Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
