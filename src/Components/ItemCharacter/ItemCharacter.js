import React from "react";
import { Card, Image } from "semantic-ui-react";

const ItemCharacter = ({ data }) => (
  <Card>
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>
        <span className="date">{data.id}</span>
      </Card.Meta>
      <Card.Description>{data.url}</Card.Description>
    </Card.Content>
  </Card>
);

export default ItemCharacter;
