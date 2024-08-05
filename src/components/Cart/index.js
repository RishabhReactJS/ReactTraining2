import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <div>
      <b>Cart</b>
      <ul>
        {cartItems &&
          cartItems.map(product => {
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
