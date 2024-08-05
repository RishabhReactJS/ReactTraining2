import React, { useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if(products?.length <= 0){
      dispatch(fetchProducts());
    }
  }, []);

  const navigate = useNavigate();
  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  console.log('in Home >> ', products);

  return products.loader ? (
    <div>Loading Data...</div>
  ) : (
      <ul role="productlist" aria-label="List of Products" className="productList">
        {products.map((product) => {
            return (
              <li
                tabindex="0"
                role="presentation"
                key={product.id}
                onClick={() => handleClick(product.id)}
                className="productListItem"
              >
                <img className="productImage" src={product.images[0]} />
                <div className="productDetail">
                  <div>
                    <b>Brand:</b> {product.brand}
                  </div>
                  <div>
                    <b>Title:</b> {product.title}
                  </div>
                  <div>
                    <b>Price:</b> {product.price}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
  );
}

export default Home;
