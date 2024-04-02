import { META, PRODUCT } from "@/utils/types";
import React from "react";
import ProductItem from "./ProductItem";

type props = {
  data: {
    products: PRODUCT[];
    meta: META;
  };
};
export default function ProductList({ data }: props) {
  return (
    <div className="m-4 flex flex-wrap">
      {data?.products.map((product) => (
        <ProductItem
          attributes={product?.attributes}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
}
