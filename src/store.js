import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./redux/reducers/productReducers";
import cartReducer from "./fetures/cart/cartSlice";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart:cartReducer
    }
})