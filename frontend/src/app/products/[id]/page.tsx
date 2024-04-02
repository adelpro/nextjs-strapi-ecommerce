import BreadCrumb from "@/components/BreadCrumb";
import ProductDetail from "@/components/ProductDetail";
import ApiProduct from "@/services/ApiProduct";
import React from "react";
type props = {
  params: any;
};
export default async function Product({ params }: props) {
  const { id } = params;
  const product = await ApiProduct.getProductById(id);
  return (
    <>
      <BreadCrumb params={params} />
      <ProductDetail product={product} />
    </>
  );
}
