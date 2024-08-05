import React, { useState } from "react";
import axios from "axios";

const cartContextType = {
  cart: [],
  setCart: () => {},
};

const cartContext = React.createContext(cartContextType.products);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getAllCart = () => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((cartDetails) => setCart(cartDetails));
  };

  const addCart = (product) => {
    axios
      .post("https://dummyjson.com/carts/add", {
        userId: 1,
        products: product,
      })
      .then((res) => res.data)
      .then((cartDetails) => setCart([cart, ...cartDetails.products]));
  };

  const value = { cart, setCart, getAllCart, addCart };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export default function useCartContext() {
  return React.useContext(cartContext);
}
