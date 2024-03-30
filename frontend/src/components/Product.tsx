import { PRODUCT } from "@/utils/types";
import React from "react";

type props = {
  product: PRODUCT;
};
export default function Product({ product }: props) {
  const attributes = product.attributes;
  // add list that contain product data
  return (
    <ul>
      <li>id: {product.id}</li>
      <li>title: {attributes.title}</li>
      <li>description: {attributes.description}</li>
      <li>price: {attributes.price}</li>
      <li>category: {attributes.Category}</li>
    </ul>
  );
}
