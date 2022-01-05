//IMPORTS
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { CartContext } from "../Components/CartContext/CartContext";
import FormCart from "../Components/FormCart/FormCart";
import "../ViewsCSS/Cart.css";
import Swal from "sweetalert2";

const Cart = () => {
  const { items, removeItem, clearItems, totalProductos } =
    useContext(CartContext);

  const alertClear = () => {
    Swal.fire({
      title: "¿Estás seguro que quieres vaciar tu carrito?",
      text: "Perderás todo lo agregado hasta ahora.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar carrito",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡Vaciamos tu carrito!",
          "Es tu oportunidad para agregar nuevos productos.",
          "success"
        );
        clearItems();
      }
    });
  };

  return (
    <div>
      {items.length === 0 ? (
        <div className="empyCartContainer">
          <h2 className="cartVacioTitle">Tu carrito está vacío</h2>
          <Link to="/">
            <Button className="goHomeBtn">Ver todos los productos</Button>
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
                        <a href="#/">Borrar producto</a>
                      </h4>
                      <h4 className="subtotal">
                        Subtotal: U$D {item.price * item.qty}
                      </h4>
                    </Card.Content>
                  </Card>
                </div>
              ))}
              <div className="twoBtn">
                <Link to="/cart">
                  <Button negative onClick={alertClear}>
                    Vaciar carrito
                  </Button>
                </Link>

                <Link to="/">
                  <Button positive>Continuar comprando</Button>
                </Link>
              </div>
            </div>
            <div className="total">
              <h4 className="totalPrice">
                Total <span>U$D {parseFloat(totalProductos()).toFixed(2)}</span>
              </h4>
              <FormCart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
