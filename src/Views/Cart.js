import React, { useContext } from "react";
import { Card, CardContent, Image } from "semantic-ui-react";
import { CartContext } from "../Components/CartContext/CartContext";
import "../ViewsCSS/Cart.css";

const Cart = () => {
  const { items, removeItem, clearItems } = useContext(CartContext);

  console.log(items);

  return (
    <div className="CardContainer">
      <div className="CardUser">
        <h1>Cart</h1>
        {items.map((item) => (
          <div className="CardUser2" key={item.id}>
            <Card style={{ height: 500 }} className="imageCard">
              <Image
                src={item.image}
                wrapped
                ui={false}
                style={{ height: 290 }}
              />
              <Card.Content>
                <Card.Header className="priceContainer">
                  <span className="price">${item.price}</span>
                </Card.Header>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>Cantidad: {item.qty}</Card.Description>
                <h4 onClick={() => removeItem(item.id)} className="removeBtn">
                  <a>Borrar producto</a>
                </h4>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
      {items.length === 0 ? null : (
        <h4 onClick={() => clearItems()} className="clearBtn">
          <a href="/cart">Vaciar Carrito</a>
        </h4>
      )}
    </div>
  );
};

export default Cart;
