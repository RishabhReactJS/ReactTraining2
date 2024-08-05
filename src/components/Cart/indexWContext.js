import React, { useEffect } from "react";
import useCartContext from "../../Context/cartContext";
import Prodcut from "../Product";

function Cart() {
  const cartContext = useCartContext();

  return (
    <div>
      <b>Cart</b>
      <ul>
        {cartContext.cart &&
          cartContext.cart.map(product => {
            return (
              <li>
                <b className="productTile">{product.title}</b>
                <div className="productContainer">
                  <div className="leftPanel">
                    <img className="productImage" src={product.thumbnail} />
                  </div>
                  <div className="rightPanel">
                    <span>
                      <b>Description:</b>{" "}
                    </span>
                    <span>{product.description}</span>
                    <div>
                      <b>Price:</b> {product.price}
                    </div>
                    <div>
                      <b>Quanitiy:</b> {product.quantity}
                    </div>
                    <div>
                      <b>Discount:</b> {product.discountPercentage}%
                    </div>
                    <div>
                      <b>Discounted Price:</b> {product.discountedPrice}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cart;
