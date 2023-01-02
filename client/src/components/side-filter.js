import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const SideFilter = () => {
  return (
    <div className="md:p-4 md:w-3/12 md:h-full">
      <div className="flex md:flex-col md:items-start md:justify-start md:bg-white  md:w-full md:py-4 md:px-4 md:rounded-lg md:h-[365px] md:shadow-md">
        <ul className="md:leading-9">
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Supermarket
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Beverages
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Health and Beauty
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Home and Office
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Phones and Tablets
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Computing
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Electronics
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Fashion
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Baby Products
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Gaming
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Sporting Goods
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Automobile
            </a>
          </li>
          <li className="flex md:flex-row md:items-center">
            <AiOutlineShopping className="md:mr-2" size={25} />
            <a
              className="md:font-light md:text-sm hover:text-orange-500 hover:md:text-orange-500 md:text-blue-900"
              href="/"
            >
              Other Categories
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideFilter;
