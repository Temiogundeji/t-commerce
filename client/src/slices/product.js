import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/product.service";
import { setMessage } from "./message";

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (thunkAPI) => {
    try {
      const response = await productService.fetchProduct();
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data.user;
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
  name: "products",
  initialState,
  reducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

const { reducer } = productSlice;
export default reducer;