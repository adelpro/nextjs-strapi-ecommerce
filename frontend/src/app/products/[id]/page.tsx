import BreadCrumb from "@/components/BreadCrumb";
import ProductDetail from "@/components/ProductDetail";
import ApiProduct from "@/services/ApiProduct";
import React from "react";
type props = {
  params: any;
};
export default async function Product({ params }: props) {
  const { id } = params;
  const product = await ApiProduct.getLatestProductById(id);
  return (
    <>
      <BreadCrumb />
     <ProductDetail data={product.data} />
    </>
  );
}
