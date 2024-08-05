import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("addToCart", async (product) => {
  const response = await axios.post("https://dummyjson.com/carts/add", {
    userId: 1,
    products: product,
  });

  return response.data
});

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idel",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.items.push(...action.payload.products); // Push the single product object
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message; // Assuming action.error.message contains the error message
      });
  }
  
});

export default cartReducer.reducer;