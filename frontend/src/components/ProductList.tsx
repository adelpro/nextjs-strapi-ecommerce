import { META, PRODUCT } from "@/utils/types";
import React from "react";
import ProductItem from "./ProductItem";

type props = {
  products: {
    data: PRODUCT[];
    meta: META;
  };
};
export default function ProductList({ products }: props) {
  return (
    <div className="flex flex-wrap">
      {products.data.map((product) => (
        <ProductItem attributes={product?.attributes} key={product.id} />
      ))}
    </div>
  );
}
