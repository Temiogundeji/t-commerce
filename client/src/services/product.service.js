import axios from "axios";
import { endpoints } from "../api";

const fetchProducts = () => {
  return axios.get(endpoints.FETCH_PRODUCTS).then(
    (response) => {
      return response;
    },
    (error) => {
      throw new Error(error);
    }
  );
};

const productService = {
  fetchProducts,
};

export default productService;
