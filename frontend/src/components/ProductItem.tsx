import imagePlaceHolder from "@/assets/imagePlaceHolder.svg";
import { PRODUCT_ATTRIBUTES } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import categorySVG from "@/assets/category.svg";
type props = {
  attributes: PRODUCT_ATTRIBUTES;
  id: string;
};
export default function ProductItem({ attributes, id }: props) {
  const ImageUrl = attributes?.banner?.data?.attributes?.url;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto p-4 hover:border hover:border-primary-600 hover:shadow hover:rounded">
      <Link href={`/products/${id}`}>
        <h2
          className="text-2xl font-semibold line-clamp-1"
          title={attributes.title}
        >
          {attributes.title}
        </h2>

        <div className="relative items-center shadow">
          <Image
            src={ImageUrl || imagePlaceHolder}
            className="rounded-lg mx-auto h-48 w-full object-cover object-center"
            aria-label={attributes?.title}
            alt={attributes?.title}
            width={450}
            height={300}
          />
          <span className="absolute bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-md bottom-0 right-0 mb-2 mr-2">
            ${attributes.price.toFixed(2)}
          </span>
          <div className="absolute flex gap-1 text-slate-400 text-sm font-bold px-2 py-0.5 rounded-md bottom-0 left-0 mb-2 ml-2 bg-gray-200">
            <Image src={categorySVG} alt="category" width={20} height={20} />
            <span area-label={`Category: ${attributes.Category}`}>
              {attributes.Category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
