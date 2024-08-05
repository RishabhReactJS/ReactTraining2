import "./App.css";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContextProvider } from "./Context/productsContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
// import Home from "./components/Home/indexWContext";
import Product from "./components/Product";
// import Product from "./components/Product/indexWContext";
// import Cart from "./components/Cart/indexWContext";
import Cart from "./components/Cart";
import { CartContextProvider } from "./Context/cartContext";
import { Provider } from "react-redux";
import {store} from "./store";

function App() {
  const inputRef = useRef();

  return (
    <>
    <Provider store={store}>
      <Header />
      <ProductContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
      </Provider>
    </>
  );
}

export default App;
