import React from "react";
import { Card, Image } from "semantic-ui-react";

const Item = ({ data }) => (
  <Card style={{ height: 400 }}>
    <Image src={data.thumbnail} wrapped ui={false} style={{ height: 290 }} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Header>
        <span className="date">${data.price}</span>
      </Card.Header>
      <Card.Description>{data.quantity}</Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
