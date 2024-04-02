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
    <div className="mx-auto w-full p-4 hover:rounded hover:border hover:border-primary-600 hover:shadow sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <Link href={`/products/${id}`}>
        <div className="relative items-center shadow">
          <Image
            src={ImageUrl || imagePlaceHolder}
            className="mx-auto h-48 w-full rounded-t-md object-cover object-center"
            aria-label={attributes?.title}
            alt={attributes?.title}
            width={450}
            height={300}
          />
          <span className="absolute bottom-0 right-0 mb-2 mr-2 rounded-md bg-primary-600 px-2 py-1 text-xs font-bold text-white">
            ${attributes.price.toFixed(2)}
          </span>
          <div className="absolute bottom-0 left-0 mb-2 ml-2 flex gap-1 rounded-md bg-gray-200 px-2 py-0.5 text-sm font-bold text-slate-400">
            <Image src={categorySVG} alt="category" width={20} height={20} />
            <span area-label={`Category: ${attributes.Category}`}>
              {attributes.Category}
            </span>
          </div>
        </div>
        <h2
          className="ml-2 line-clamp-1 text-2xl font-semibold text-gray-500"
          title={attributes.title}
        >
          {attributes.title}
        </h2>
      </Link>
    </div>
  );
}
