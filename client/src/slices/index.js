import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./auth";
import messageReducer from "./message";
import productReducer from "./product";

console.log(productReducer);

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  products: productReducer,
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
