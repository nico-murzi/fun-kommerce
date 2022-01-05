//IMPORTS
import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    const found = items.find((item) => item.id === id);
    return found;
  };

  const addItem = (item, qty) => {
    isInCart(item.id)
      ? setItems(
          items.map((prod) => {
            if (prod.id === item.id) {
              prod.qty += qty;
            }
            return prod;
          })
        )
      : setItems([
          ...items,
          {
            id: item.id,
            name: item.title,
            price: item.price,
            qty: qty,
            image: item.img,
          },
        ]);

    const alertAdd = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    };
    alertAdd();
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));

    const alertDel = () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Producto eliminado",
        showConfirmButton: false,
        timer: 1500,
      });
    };
    alertDel();
  };

  const clearItems = () => {
    setItems([]);
  };

  const totalProductos = () => {
    return items.reduce((acum, value) => acum + value.qty * value.price, 0);
  };

  const scrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        totalProductos,
        scrollTop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
