import React from "react";
import RecommendedProduct from "./recommended-product";

const RecommendedProductList = (props) => {
  const lists = props.products.map((product, i) => (
    <RecommendedProduct key={i} product={product} />
  ));

  return <div className="flex md:flex-wrap md:items-stretch md:px-auto md:gap-[5%] md:px-16">{lists}</div>;
};

export default RecommendedProductList;
