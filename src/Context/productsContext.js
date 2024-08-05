import React, { useEffect, useState } from "react";
import axios from "axios";

const productContextType = {
  products: [],
  setProducts: () => {},
};

const productContext = React.createContext(productContextType.products);

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products?limit=50")
  //     .then((res) => {
  //       console.log("in then >> ", res);
  //       return res.data})
  //     .then((products) => setProducts(products.products))
  //     .catch((err) => alert("error while fetching products", err));
  // }, []);

  function getProduct(productId) {
    console.log("in getProduct >> ", productId);
    console.log(products.find((product) => product.id == productId));
    return products.find((product) => product.id == productId);
  }

  const value = { products, setProducts, getProduct };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default function useProductContext() {
  return React.useContext(productContext);
}
