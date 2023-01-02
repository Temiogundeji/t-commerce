import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../slices/auth";
import ReactLoading from "react-loading";
import { notifyOnError, notifyOnSuccess } from "../utils/toast";
import { clearMessage } from "../slices/message";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Signup = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(1, "Last Name must be at least 6 characters")
      .max(20, "Last Name must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone Number is required"),
    password: Yup.string().required("Password is required"),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { message } = useSelector((state) => state.message);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(signup(data))
      .unwrap()
      .then(() => {
        notifyOnSuccess(
          `Welcome to Tcommerce, ${data.firstName}. We are happy to have you.`
        );
        navigate("/", { replace: true });
        console.log(isLoggedIn);
      })
      .catch((e) => {
        notifyOnError(message);
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
            Welcome to TCommerce
          </h2>
          <p className="lg:font-semibold lg:text-white lg:text-xl">
            The best place to get all your need at the click of a button.
          </p>
        </header>
      </div>
      <div
        className="flex lg:flex-col lg:w-1/2 lg:h-screen lg:p-x-20 lg:p-y-20 lg:justify-center lg:items-center
        lg:overflow-y-scroll
        "
      >
        <div className="flex lg:flex-col lg:justify-center lg:text-start">
          <div className="lg:mb-10 lg:mt-32">
            <h1 className="lg:text-3xl lg:mb-2 lg:font-bold lg:mt-52">
              Create an account
            </h1>
            <p className="lg:font-semi-bold lg:text-base lg:w-4/5">
              Get access to our quality product in few click...
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
              <span>Sign up with Google</span>
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
              <span>Sign up with Facebook</span>
            </button>
          </div>
          <main className="flex lg:flex-col lg:justify-center lg:w-full lg:h-full">
            <form
              className="lg:w-full lg:mb-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg:font-semibold">First Name</label>
                <input
                  className={` ${
                    errors.firstName
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  type="text"
                  placeholder="Adam"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName?.type === "required" && (
                  <p className="lg:text-sm lg:text-red-400">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg: font-semibold">Last Name</label>
                <input
                  name="lastName"
                  className={` ${
                    errors.lastName
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  type="text"
                  placeholder="Nuh"
                  {...register("lastName", { required: true })}
                />
                <p className="lg:text-sm lg:text-red-400">
                  {errors.lastName?.message}
                </p>
              </div>
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg:font-semibold">Email</label>
                <input
                  name="email"
                  className={` ${
                    errors.email
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  type="email"
                  placeholder="adamnuh@you.com"
                  {...register("email", { required: true })}
                />
                <p className="lg:text-sm lg:text-red-400">
                  {errors.email?.message}
                </p>
              </div>
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg:font-semibold">Phone Number</label>
                <input
                  name="phoneNumber"
                  className={` ${
                    errors.phoneNumber
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  type="phone"
                  placeholder="07000044444"
                  {...register("phoneNumber", { required: true })}
                />
                <p className="lg:text-sm lg:text-red-400">
                  {errors.phoneNumber?.message}
                </p>
              </div>
              <div className="lg:mb-3 flex lg:flex-col">
                <label className="lg:font-semibold">Password</label>
                <input
                  className={` ${
                    errors.firstName
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  type="password"
                  placeholder="**********"
                  {...register("password", { required: true })}
                />
                <p className="lg:text-sm lg:text-red-400">
                  {errors.password?.message}
                </p>
              </div>
              <div className="flex lg:flex-col">
                <label className="lg:font-semibold">Confirm Password</label>
                <input
                  name="cpassword"
                  className={` ${
                    errors.cpasss
                      ? "border-red-400 md:border-red-400"
                      : "border-stone-400 md:border-stone-400"
                  } md:border-2 border-2  px-5 py-[7px] lg:rounded-lg`}
                  type="password"
                  placeholder="**********"
                  {...register("cpassword", { required: true })}
                />
                <p className="lg:text-sm lg:text-red-400">
                  {errors.cpassword?.message}
                </p>
              </div>
              <div className="lg:mb-5 lg:mt-5 flex lg:flex-row lg:h-5">
                <span className="lg:mr-2">Already registered?</span>
                <Link to="/login">Login</Link>
              </div>
              <button className="flex lg:flex-row lg:items-center lg:justify-center md:hover:bg-blue-900 md:bg-blue-800 md:py-2 md:rounded-lg lg:text-white lg:font-semibold lg:w-full">
                <span className="lg:mr-5 lg:text-xl">Sign Up</span>
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

export default Signup;
