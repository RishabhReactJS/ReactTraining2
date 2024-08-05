import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useProductContext from "../../Context/productsContext";
import useCartContext from "../../Context/cartContext"
import "./index.css";

function Prodcut() {
  const productContext = useProductContext();
  const [product, setProduct] = useState({});
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const cartContext = useCartContext()

  useEffect(() => {
    console.log("in params >> ", params);
    const seletedProduct = productContext.getProduct(params.productId);
    setProduct(seletedProduct);
  }, [productContext.products]);

  useEffect(() => {
    const selectedCartProduct = cartContext?.cart?.find(product => product.id == params.productId)
    setQuantity(selectedCartProduct?.quantity || 0)
  }, [])

  const handleAddCart = () => {
    // cartContext.setCart([...cartContext.cart, {...product, quantity: quantity}]
    cartContext.addCart([{id: params.productId, quantity: quantity}])
  } 

  return product?.title ? (
    <>
      <b className="productTile">{product.title}</b>
      <div className="productContainer">
        <div className="leftPanel">
          <img className="productImage" src={product.images[0]} />
        </div>
        <div className="rightPanel">
          <span><b>Description:</b> </span><span>{product.description}</span>
          <div><b>Rating:</b> {product.rating}</div>
          <div><b>Price:</b> {product.price}</div>
          <div><b>Discount:</b> {product.discountPercentage}%</div>
          <div className="addCartBtns">

            <button onClick={() => setQuantity(quantity-1)} >-</button>
            <button>{quantity}</button>
            <button onClick={() => setQuantity(quantity+1)} >+</button>
          </div>
            <button className="addCartBtn" onClick={handleAddCart} >Add To Cart</button>
        </div>
      </div>
    </>
  ) : (
    <div>No Product</div>
  );
}

export default Prodcut;
