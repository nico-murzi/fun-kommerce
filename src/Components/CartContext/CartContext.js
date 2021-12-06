import React, { createContext, useState, useEffect } from "react";

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=funko&limit=12")
      .then((response) => response.json())
      .then((json) => setItems(json.results));
  }, []);

  // 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
  return (
    <CartContext.Provider value={[items, setItems]}>
      {/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
      {children}
    </CartContext.Provider>
  );
};
