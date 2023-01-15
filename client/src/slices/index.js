import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./auth";
import messageReducer from "./message";
import productReducer from "./product";

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  product: productReducer,
});

const store = configureStore({
  reducer,
});

export default store;
