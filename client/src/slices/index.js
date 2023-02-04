import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./auth";
import messageReducer from "./message";
import productReducer from "./products";

// const reducer = combineReducers({
//   auth: authReducer,
//   message: messageReducer,
//   products: productReducer,
// });

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
  devTools: true,
});

export default store;
