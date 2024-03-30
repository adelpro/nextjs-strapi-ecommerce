import { PRODUCT_ATTRIBUTES } from "@/utils/types";
import React from "react";

type props = {
  attributes: PRODUCT_ATTRIBUTES;
};
export default function Product({ attributes }: props) {
  return (
    <li className="bg-white shadow-sm rounded-lg p-4 flex flex-col">
      <h2 className="text-2xl font-semibold">{attributes.title}</h2>
      <p className="mt-2 text-gray-600">
        {JSON.stringify(attributes.description)}
      </p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600">
          <strong>Category: </strong>
          {attributes.Category}
        </p>
        <p className="text-gray-600">
          <strong>Price: </strong>${attributes.price}
        </p>
      </div>
    </li>
  );
}
