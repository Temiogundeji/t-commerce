import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import productService from "../services/product.service";

// export const fetchProducts = createAsyncThunk(
//   "products/fetch",
//   async (thunkAPI) => {
//     try {
//       const response = await productService.fetchProduct();
//       thunkAPI.dispatch(setMessage(response.data.message));
//       console.log(response.data);
//       return response.data.products;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await productService.fetchProducts();
    return response.data;
  }
);

const initialState = { products: [] };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.products.concat(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       // Add user to the state array
//       // state.products.push(action.payload);
//       state.products = action.payload.products;
//       return action.payload.products;
//     });
//   },
// });

const { reducer } = productSlice;
export default reducer;
