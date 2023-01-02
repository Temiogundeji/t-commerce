import React from "react";

const RecommendedProduct = (props) => {
  return (
    <div className="flex md:flex-col md:justify-between md:items-center md:w-[30%] md:shadow-md  md:rounded-lg md:mb-10 md:h-72">
      <div className="md:w-full md:h-32 md:rounded-tr-md md:rounded-tl-md  md:bg-gray-200">img</div>
      <div className="md:p-5">
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
    </div>
  );
};

export default RecommendedProduct;
