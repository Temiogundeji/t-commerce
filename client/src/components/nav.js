import React from "react";
import { BiUser } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="md:px-5 md:py-2 md:shadow-md">
      <nav>
        <ul className="flex flex-col md:flex-row lg:flex-row md:items-center md:justify-between md:p-0 p-4">
          <li className="md:w-3/12 flex flex-row justify-between">
            <a href="/">
              <img
                className="md:h-12 h-12"
                alt="t-commerce logo"
                src="https://res.cloudinary.com/temilorun/image/upload/v1671245395/logo_ctmnbc.png"
              />
            </a>
            <button className="md:hidden border-2 border-slate-500 p-2 rounded-md outline-none focus:outline-none lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </li>
          <li>
            <Link
              className="hover:text-orange-500 md:font-semibold hover:md:text-orange-500 md:text-blue-800"
              to="/store-locator"
            >
              Store locator
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-500 md:font-semibold hover:md:text-orange-500 md:text-blue-800"
              to="/sell-here"
            >
              Sell here
            </Link>
          </li>
          <li className="md:w-4/12">
            <form>
              <div className="flex md:flex-row md:items-center">
                <input
                  placeholder="Search for product, brand"
                  name="search-box"
                  className="md:border-2 border-2 border-stone-400 md:border-stone-400 rounded-tl-lg md:rounded-tl-lg rounded-bl-md md:rounded-bl-md py-2 md:py-2 md:px-5 px-5"
                  type="text"
                />
                <button className="md:bg-orange-500 bg-orange-500 h-11 md:h-11 w-10 md:w-10 rounded-tr-lg md:rounded-tr-lg  md:rounded-br-md flex md:flex md:items-center md:justify-center">
                  <FaSistrix
                    className="font-bold"
                    size={20}
                    color={"#ffffff"}
                  />
                </button>
              </div>
            </form>
          </li>
          <li className="md:w-{100%}">
            <div className="md:bg-slate-200 md:p-3 md:rounded-full">
              <BiUser size={28} />
            </div>
          </li>
          <li className="md:w-{100%}">
            <Link
              className="hover:text-orange-500 md:font-semibold hover:md:text-orange-500 md:text-blue-800"
              to="/signup"
            >
              Sign up/Login
            </Link>
          </li>
          <li className="flex md:flex-row md:justify-center md:w-1/12 md:bg-blue-800 md:py-2 md:rounded-lg">
            <span className="md:text-sm md:text-white md:px-2">My Cart</span>
            <span className="md:bg-white md:px-2 md:rounded-md">1</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
