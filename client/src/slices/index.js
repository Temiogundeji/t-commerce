import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./auth";
import messageReducer from "./message";

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

console.log(reducer);

const store = configureStore({
  reducer,
});

export default store;
