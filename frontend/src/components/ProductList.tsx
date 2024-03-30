import { META, PRODUCT } from "@/utils/types";
import React from "react";
import Product from "./Product";

type props = {
  products: {
    data: PRODUCT[];
    meta: META;
  };
};
export default function ProductList({ products }: props) {
  return (
    <div>
      {products.data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
