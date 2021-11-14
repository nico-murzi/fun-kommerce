import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="itemList">
      <Card>
        <Image
          src="https://www.ositoazul.com.ar/database/articulos/fotos/2871/FUNKO%20POP%20DRAGON%20BALL%20Z%20PICCOLO__2.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Piccolo</Card.Header>
          <Card.Meta>
            <span className="date">Dragon Ball</span>
          </Card.Meta>
          <Card.Description>Ki Inicial: 338</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemListContainer;
