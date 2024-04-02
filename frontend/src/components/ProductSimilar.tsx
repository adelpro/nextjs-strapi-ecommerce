import { META, PRODUCT } from "@/utils/types";
import React from "react";
import ProductItem from "./ProductItem";

type props = {
  products: PRODUCT[];
};

export default function ProductSimilar({ products }: props) {
  return (
    <div className="m-4 flex flex-wrap items-center justify-start">
      {products.map((product) => (
        <ProductItem
          attributes={product?.attributes}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
}
