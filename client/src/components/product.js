import React from "react";

const Product = (props) => {
  return (
    <div className="flex md:flex-row md:items-center md:gap-[5%] md:w-[30%] md:shadow-md md:p-5 md:rounded-lg md:mb-10">
      <div className="md:p-5 md:rounded-md md:bg-gray-200">img</div>
      <div className="flex md:flex-col">
        <span>{props.product.title}</span>
        <span className="md:font-bold md:text-xl">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(props.product.price)}
        </span>
      </div>
    </div>
  );
};

export default Product;
