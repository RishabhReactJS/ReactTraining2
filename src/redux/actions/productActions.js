import axios from "axios";

export const GETSINGLEPRODUCT = "GETSINGLEPRODUCT";
export const FETCHINGPRODUCTS = "FETCHINGPRODUCTS";
export const FETCHINGPRODUCTSSUCESS = "FETCHINGPRODUCTSSUCESS";
export const FETCHINGPRODUCTSERROR = "FETCHINGPRODUCTSERROR";

export const fetchingProducts = () => ({
  type: "FETCHINGPRODUCTS",
});

export const fetchingProductsSucess = (products) => ({
  type: "FETCHINGPRODUCTSSUCESS",
  payload: products,
});

export const getSingleProduct = (productId) => ({
  type: "GETSINGLEPRODUCT",
  payload: productId,
});

export const fetchingProductsError = (err) => ({
  type: "FETCHINGPRODUCTSERROR",
  payload: err,
});

export function fetchProducts() {
  return function (dispatch) {
    dispatch(fetchingProducts());
    return axios
      .get("https://dummyjson.com/products?limit=50")
      .then((res) => {
        console.log("in then >> ", res);
        return res.data;
      })
      .then((products) => dispatch(fetchingProductsSucess(products.products)))
      .catch((err) => {
        alert("error while fetching products", err);
        dispatch(fetchingProductsError(err));
      });
  };
}
