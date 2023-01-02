import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/auth";
import { notifyOnError, notifyOnSuccess } from "../utils/toast";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { message } = useSelector((state) => state.message);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(login(data))
      .unwrap()
      .then(() => {
        notifyOnSuccess(
          `Welcome back, ${data.firstName}. We are happy to have you.`
        );
        navigate("/", { replace: true });
        console.log(isLoggedIn);
      })
      .catch((e) => {
        notifyOnError(message);
        setLoading(false);
      });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="flex lg:flex-row lg:w-screen lg:justify-center lg:items-center font-nunito">
      <div className="flex lg:flex-col lg:w-1/2 lg:bg-orange-500 lg:h-screen lg:px-10">
        <div className="lg:mt-10 lg:mb-52">
          <img
            alt="logo"
            className="lg:h-12"
            src="https://res.cloudinary.com/temilorun/image/upload/v1671245395/logo_ctmnbc.png"
          />
        </div>
        {/* Form header */}
        <header>
          <h2 className="lg:font-bold lg:text-4xl lg:text-white lg:mb-5">
            {" "}
            Welcome Back
          </h2>
          <p className="lg:font-semibold lg:text-white lg:text-xl lg:w-4/5">
            Continue exploring some of the products we have in store for you.
          </p>
        </header>
      </div>
      <div
        className="flex lg:flex-col lg:w-1/2 lg:h-screen lg:p-x-20 lg:p-y-10 lg:justify-center lg:items-center
        
        "
      >
        <div className="flex lg:flex-col lg:justify-center lg:text-start">
          <div className="lg:mb-10 lg:mt-7">
            <h1 className="lg:text-3xl lg:mb-2 lg:font-bold">
              Great! you're here
            </h1>
            <p className="lg:font-semi-bold lg:text-base">
              Log in to see our new product offerings...
            </p>
          </div>
          {/* Google Signup */}
          <div className="flex lg:flex-row lg:gap-x-2 lg:w-full lg:mb-7 lg:rounded-5">
            <button className="flex lg:flex-row md:border-2 border-2 border-stone-400 md:border-stone-400 px-5 py-2 lg:rounded-lg">
              <span className="lg:mr-2">
                <img
                  alt="google logo"
                  className="lg:h-6"
                  src="https://res.cloudinary.com/temilorun/image/upload/v1671967376/icons8-google_oprqjb.svg"
                />
              </span>
              <span>Login with Google</span>
            </button>
            {/* Facebook Signup */}
            <button className="flex lg:flex-row md:border-2 border-2 border-stone-400 md:border-stone-400 px-5 py-2 lg:rounded-lg">
              <span className="lg:mr-2">
                <img
                  className="lg:h-6"
                  alt="google logo"
                  src="https://res.cloudinary.com/temilorun/image/upload/v1671967376/icons8-facebook_qp6zwm.svg"
                />
              </span>
              <span>Login with Facebook</span>
            </button>
          </div>
          <main className="flex lg:flex-col lg:justify-center lg:w-full lg:h-full">
            <form
              className="lg:w-full lg:mb-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg:font-semibold">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className={` ${
                    errors.email
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2 px-5 py-[7px] lg:rounded-lg`}
                  placeholder="adamnuh@you.com"
                />
                {errors.email?.type === "required" && (
                  <p className="lg:text-sm lg:text-red-400">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg:font-semibold">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className={` ${
                    errors.password
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  placeholder="**********"
                />
                <p className="lg:text-sm lg:text-red-400">
                  {errors.password?.message}
                </p>
              </div>
              <div className="lg:mb-5 lg:mt-5 flex lg:flex-row lg:h-5">
                <span className="lg:mr-2">New to Tcommerce?</span>
                <Link to="/signup">Sign up</Link>
              </div>
              <button className="flex lg:flex-row lg:items-center lg:justify-center hover:md:bg-blue-900 md:bg-blue-800 md:py-2 md:rounded-lg lg:text-white lg:font-semibold lg:w-full">
                <span className="lg:mr-5 lg:text-xl">Login</span>
                {loading && (
                  <ReactLoading
                    type={"spin"}
                    color={"#ffffff"}
                    height={20}
                    width={20}
                  />
                )}
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
