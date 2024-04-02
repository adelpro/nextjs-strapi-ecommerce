import { PRODUCT } from "@/utils/types";
import Image from "next/image";
import React from "react";
import categorySVG from "@/assets/category.svg";
import ApiProduct from "@/services/ApiProduct";
import ProductList from "./ProductList";
import ProductSimilar from "./ProductSimilar";
type Props = {
  product: PRODUCT;
};
export default async function ProductDetail({ product }: Props) {
  const similarProducts = await ApiProduct.getLatestProductsByCategory(
    product?.attributes?.Category,
  );
  console.log(similarProducts);
  return (
    <>
      <div className="m-4 flex flex-col gap-2 rounded bg-white p-4 shadow-lg md:flex-row">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt={product?.attributes?.title}
          width={500}
          height={400}
          className="w-42 mx-auto h-48 rounded-lg object-cover object-center"
        />

        <div className="ml-3 flex flex-col items-start justify-start gap-2">
          <h2 className="text-2xl font-bold">{product?.attributes?.title}</h2>
          <div className="flex gap-1 rounded-md bg-gray-200 px-2 py-0.5 text-sm font-bold text-slate-400">
            <Image src={categorySVG} alt="category" width={20} height={20} />
            <span area-label={`Category: ${product?.attributes.Category}`}>
              cate{product?.attributes?.Category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary-600">
            ${product?.attributes?.price}
          </h3>
          <p className="text-balance text-lg text-gray-500">
            {product?.attributes?.description[0]?.children[0].text}
          </p>
        </div>
      </div>
      <div className="mb-4 mt-24">
        <h2 className="ml-4 text-4xl font-bold text-slate-700">
          Similar Products
        </h2>
        <ProductSimilar products={similarProducts} />
      </div>
    </>
  );
}
