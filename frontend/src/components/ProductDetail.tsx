import { PRODUCT } from "@/utils/types";
import Image from "next/image";
import React from "react";
import categorySVG from "@/assets/category.svg";
type Props = {
  data: PRODUCT;
};
export default function ProductDetail({ data }: Props) {
  console.log(data.attributes.Category);
  return (
    <div className="m-4 flex flex-col gap-2 rounded bg-white p-4 shadow-lg md:flex-row">
      <Image
        src={data?.attributes?.banner?.data?.attributes?.url}
        alt={data?.attributes?.title}
        width={500}
        height={400}
        className="w-42 mx-auto rounded-lg object-cover object-center"
      />

      <div className="ml-3 flex flex-col items-start justify-start gap-2">
        <h2 className="text-2xl font-bold">{data?.attributes?.title}</h2>
        <div className="flex gap-1 rounded-md bg-gray-200 px-2 py-0.5 text-sm font-bold text-slate-400">
          <Image src={categorySVG} alt="category" width={20} height={20} />
          <span area-label={`Category: ${data?.attributes.Category}`}>
            cate{data?.attributes?.Category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-primary-600">
          ${data?.attributes?.price}
        </h3>
        <p className="text-balance text-lg text-gray-500">
          {data?.attributes?.description[0]?.children[0].text}
        </p>
      </div>
    </div>
  );
}
