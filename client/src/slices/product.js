import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/product.service";
import { setMessage } from "./message";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (thunkAPI) => {
    try {
      const response = await productService.fetchProduct();
      console.log(response.data.products)
      return response.data.products;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = [];
const productSlice = createSlice({
  name: "products/fetch",
  initialState,
  reducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
