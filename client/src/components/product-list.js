import React from "react";
import Product from "./product";

const ProductList = (props) => {
  const lists = props.products.map((product, i) => (
    <Product key={i} product={product} />
  ));

  return (
    <div className="flex md:flex-wrap md:items-stretch md:px-auto md:gap-[5%] md:px-16">
      {lists}
    </div>
  );
};

export default ProductList;
