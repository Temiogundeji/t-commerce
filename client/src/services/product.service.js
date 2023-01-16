import axios from "axios";
import { endpoints } from "../api";

const fetchProduct = () => {
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
  fetchProduct,
};

export default productService;
