import React, { useEffect } from "react";
import Nav from "../components/nav";
import Slider from "../components/slider";
import SideFilter from "../components/side-filter";
import Heading from "../components/heading";
import ProductList from "../components/product-list";
import RecommendedProductList from "../components/recommended-product-list";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/product";

const products = [
  { id: 1, title: "Nex 18", price: 345.0 },
  { id: 2, title: "HP Laptop", price: 280000.0 },
  { id: 3, title: "DVD Sony", price: 21000.0 },
  { id: 4, title: "iPhone 14", price: 450.78 },
  { id: 5, title: "iPhone 6", price: 90.78 },
];

const recommendedProducts = [
  { id: 1, title: "Nex 18", price: 345.0 },
  { id: 2, title: "HP Laptop", price: 280000.0 },
  { id: 3, title: "DVD Sony", price: 21000.0 },
  { id: 4, title: "Mac Book Pro", price: 120000.0 },
  { id: 5, title: "iPhone 14", price: 450.78 },
  { id: 6, title: "iPhone 6", price: 90.78 },
];

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="font-nunito">
      <Nav />
      <div className="flex md:flex-row md:justify-center md:items-start md:h-full md:w-full md:gap-2">
        <SideFilter />
        <Slider />
      </div>
      <div className="md:py-2">
        <Heading text="Today's deals" />
        <ProductList products={products} />
      </div>
      <div>
        <Heading text="Recommended for you" />
        <RecommendedProductList products={recommendedProducts} />
      </div>
      <div className="lg:w-full md:w-full flex md:flex-row md:items-center md:justify-between bg-gray-100 lg:h-36 lg:mt-10 lg:mb-0 border-y-2 border-black-200 px-16">
        <div className="flex lg:flex-col lg:justify-center">
          <span className="text-4xl lg:font-bold lg:mb-2 md:mb-2 md:capitalize">
            Be the first to be notified...
          </span>
          <span className="text-xl text-upper">
            When we have new set of products you prefer.
          </span>
        </div>
        <div>
          <input
            className="md:px-10 md:py-3 border-stone-400 md:border-stone-400 md:rounded-tl-lg md:rounded-bl-lg"
            type="text"
          />
          <button className="md:rounded-tr-lg md:rounded-br-lg md:bg-orange-500 md:py-3 md:px-2 md:text-white md:font-bold">
            Subscribe
          </button>
        </div>
      </div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
                126 Joel Ogunnaike Street, Ikeja GRA, Ikeja, Lagos, Nigeria +234
                163 16160
              </p>
            </div>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
              &#169;Copyright 2022
            </span>
          </div>
        </div>
      </footer>
      {/* <footer className="md:bg-[#323232] text-[#c7c7cd] lg:h-[250px] flex lg:flex-row lg:px-16">
        <div className="flex md:flex-row lg:items:center md:py-32 h-fit">

          <ul>
            <span>let us help you</span>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">How to shop on Tcommerce</a>
            </li>
            <li>
              <a href="#">Delivery options and timelines</a>
            </li>
          </ul>
          <ul>
            <span>About Tcommerce</span>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Tcommerce careers</a>
            </li>
            <li>
              <a href="#">T-commerce express</a>
            </li>
            <li>
              <a href="#">Terms and Condition</a>
            </li>
          </ul>
          <ul>
            <span>Make money on T-commerce</span>
            <li>
              <a href="#">Sell on Tcommerce</a>
            </li>
            <li>
              <a href="#">Become a sales consultant</a>
            </li>
            <li>
              <a href="#">Become a logistic service partner</a>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
