import React from "react";
import useProductContext from "../../Context/productsContext";
import "./index.css"
import {useNavigate} from "react-router-dom";

function Home() {
  const productContext = useProductContext();


    console.log('in  Home >>', productContext);
    const navigate = useNavigate();
    const handleClick = (productId) => {
        navigate(`/product/${productId}`)
    }

  return (
    <div>
      <ul className="productList">
        {productContext?.products.length > 1 && productContext?.products.map((product) => {
          return (
            <li key={product.id} onClick={() => handleClick(product.id)} className="productListItem">
              <img className="productImage" src={product.images[0]} />
              <div className="productDetail">
              <div><b>Brand:</b> {product.brand}</div>
              <div><b>Title:</b> {product.title}</div>
              <div><b>Price:</b> {product.price}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
