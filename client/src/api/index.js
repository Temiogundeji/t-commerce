import axios from "axios";

export const api = axios.create({
  baseURL: "/api/users",
  headers: {
    "Content-Type": "application/json",
  },
});

const baseURL = "/api";

export const endpoints = {
  me: `${baseURL}/me`,
  LOGIN: `${baseURL}/users/auth/login`,
  SIGNUP: `${baseURL}/users/auth/signup`,
  RESET_PASSWORD: `${baseURL}/users/update/password/reset`,
  ADD_TO_WISHLIST: `${baseURL}/users/wishlist/add`,
  DELETE_FROM_WISHLIST: `${baseURL}/users/wishlist/delete`,
  FETCH_PRODUCTS: `${baseURL}/products`,
  NEW_PRODUCTS: `${baseURL}/products/new`,
  FETCH_PRODUCT: (id) => `${baseURL}/products/${id}`,
  DELETE_PRODUCT: (id) => `${baseURL}/products/${id}`,
  UPDATE_PRODUCT: (id) => `${baseURL}/products/${id}`,
  DELETE_FROM_CART: (productId) => `${baseURL}/cart/${productId}`,
  ADD_TO_CART: `${baseURL}/cart`,
};
