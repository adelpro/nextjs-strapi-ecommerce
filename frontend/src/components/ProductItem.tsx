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

      <div className="relative items-center shadow">
        <Image
          src={ImageUrl || imagePlaceHolder}
          className="rounded-lg mx-auto h-64 w-full object-cover"
          aria-label={attributes?.title}
          alt={attributes?.title}
          width={450}
          height={300}
        />
        <span className="absolute bg-primary-600 text-white text-xs font-bold px-5 py-2 rounded-md bottom-0 right-0 mb-2 mr-2">
          ${attributes.price}
        </span>
        <span
          className="absolute text-slate-400 text-xl font-bold p-1 rounded-md bottom-0 left-0 mb-2 ml-2"
          area-label={`Category: ${attributes.Category}`}
        >
          {attributes.Category}
        </span>
      </div>
    </div>
  );
}
