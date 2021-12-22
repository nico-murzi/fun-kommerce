import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import { CartContext } from "../Components/CartContext/CartContext";
import "../ViewsCSS/Cart.css";

const Cart = () => {
  const { items, removeItem, clearItems, totalProductos } =
    useContext(CartContext);

  console.log(items);

  return (
    <div>
      {items.length === 0 ? (
        <div className="empyCartContainer">
          <h2 className="cartVacioTitle">Tu carrito esta vacio.</h2>
          <Link to="/">
            <h3 className="goHomeBtn">Quiero comprar algo</h3>
          </Link>
        </div>
      ) : (
        <div className="CardContainer">
          <div className="CardUserCart">
            <div className="carrito">
              <h1 className="cartTitle">Tus productos</h1>
              {items.map((item) => (
                <div className="CardUser2" key={item.id}>
                  <Card style={{ height: 550 }} className="imageCard">
                    <Image
                      src={item.image}
                      wrapped
                      ui={false}
                      style={{ height: 290 }}
                    />
                    <Card.Content>
                      <Card.Header className="priceContainer">
                        <span className="price">{item.name}</span>
                      </Card.Header>
                      <Card.Header>U$D {item.price}</Card.Header>
                      <Card.Description>Cantidad: {item.qty}</Card.Description>
                      <h4
                        onClick={() => removeItem(item.id)}
                        className="removeBtn"
                      >
                        <a>Borrar producto</a>
                      </h4>
                      <h4>Subtotal: U$D {item.price * item.qty}</h4>
                    </Card.Content>
                  </Card>
                </div>
              ))}
              <div className="twoBtn">
                <h2 onClick={() => clearItems()} className="clearBtn">
                  <Link to="/cart">Vaciar Carrito</Link>
                </h2>
                <h2 className="goBuy">
                  <Link to="/">Continuar compra</Link>
                </h2>
              </div>
            </div>
            <div className="total">
              <h4 className="totalPrice">
                Total <span>U$D {parseFloat(totalProductos()).toFixed(2)}</span>
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
