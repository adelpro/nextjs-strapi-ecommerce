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
    <ul>
      {products.data.map((product) => (
        <li key={product.id}>
          <Product attributes={product?.attributes} />
        </li>
      ))}
    </ul>
  );
}
