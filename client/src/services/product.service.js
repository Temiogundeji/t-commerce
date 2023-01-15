import axios from "axios";
import { endpoints } from "../api";

const fetchProduct = () => {
  return axios.get(endpoints.FETCH_PRODUCTS).then(
    (response) => {
      console.log(response.data);
      return response.data;
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
