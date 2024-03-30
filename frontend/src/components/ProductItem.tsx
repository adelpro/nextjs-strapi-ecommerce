import { PRODUCT_ATTRIBUTES } from "@/utils/types";
import Image from "next/image";
import React from "react";

import imagePlaceHolder from "@/assets/imagePlaceHolder.svg";
type props = {
  attributes: PRODUCT_ATTRIBUTES;
};
export default function ProductItem({ attributes }: props) {
  console.log(attributes);
  const ImageUrl = attributes?.banner?.data?.attributes?.url;
  console.log(attributes?.banner?.data?.attributes);
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto p-4">
      <h2 className="text-2xl font-semibold">{attributes.title}</h2>
      <Image
        src={ImageUrl || imagePlaceHolder}
        className="rounded-lg mx-auto"
        alt={attributes?.title}
        width={450}
        height={300}
      />
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
    </div>
  );
}
