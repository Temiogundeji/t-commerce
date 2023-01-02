import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import VerifyAccount from "./pages/verify-account";
import Confirm from "./pages/confirm";
import PasswordReset from "./pages/password-reset";
import Signup from "./pages/signup";
import ForgetPassword from "./pages/forget-password";
import ProductCategory from "./pages/product-category";
import Product from "./pages/product";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/verify" element={<VerifyAccount />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/confirm" element={<Confirm />} />
      <Route exact path="/forget-password" element={<ForgetPassword />} />
      <Route exact path="/password-reset" element={<PasswordReset />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/products-category" element={<ProductCategory />} />
    </Routes>
  );
}

export default App;
