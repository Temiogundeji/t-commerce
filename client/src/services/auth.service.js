import axios from "axios";
import { endpoints } from "../api";

const register = (payload) => {
  return axios.post(endpoints.SIGNUP, {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    phoneNumber: payload.phoneNumber,
  });
};

const login = (email, password) => {
  return axios
    .post(endpoints.LOGIN, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
