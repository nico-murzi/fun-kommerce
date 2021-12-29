//IMPORTS
import React, { useState, useContext } from "react";
import { Button, Form, Loader, Segment } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";

//FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  adress: "",
  adressNumber: "",
};

const FormCart = () => {
  const { totalProductos, items } = useContext(CartContext);
  const [datos, setDatos] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [infoSuccess, setInfoSuccess] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let precioCarrito = totalProductos();
    const docRef = await addDoc(collection(db, "ordenesDeCompra"), {
      datos,
      precioTotal: precioCarrito,
      items,
    });
    // console.log('Document written with ID: ', docRef.id);
    setPurchaseID(docRef);
    setIsLoading(false);
    setDatos(initialState);
    setInfoSuccess(true);
  };

  return (
    <div>
      <Segment inverted>
        <Form inverted onSubmit={onSubmitHandler}>
          <Form.Group>
            <Form.Input
              fluid
              label="Nombre"
              placeholder="Ingresá tu nombre"
              width={9}
              name="name"
              value={datos.name}
              onChange={onChangeHandler}
            />
            <Form.Input
              fluid
              label="Apellido"
              placeholder="Ingresá tu apellido"
              width={9}
              name="lastName"
              value={datos.lastName}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              label="Email"
              placeholder="Ingresá tu email"
              width={16}
              name="email"
              value={datos.email}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              label="Dirección"
              placeholder="Ingresá la calle del envio"
              width={11}
              name="adress"
              value={datos.adress}
              onChange={onChangeHandler}
            />
            <Form.Input
              fluid
              label="Altura"
              placeholder="Altura"
              width={5}
              name="adressNumber"
              value={datos.adressNumber}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Checkbox label="Me gustaría recibir información en mi email" />
          {isLoading ? (
            <Button type="submit">Finalizar compra</Button>
          ) : (
            <Loader inverted>Loading</Loader>
          )}

          {infoSuccess ? (
            <>
              <h1>Su ID de transacción es:</h1>
              <h2>{purchaseID.id}</h2>
              <h3>
                Por favor, guarde este código para realizar el seguimiento de su
                compra
              </h3>
            </>
          ) : null}
        </Form>
      </Segment>
    </div>
  );
};

export default FormCart;
