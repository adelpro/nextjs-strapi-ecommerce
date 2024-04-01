import ApiProduct from "@/services/ApiProduct";
import React from "react";
type props = {
  params: any;
};
export default async function Product({ params }: props) {
  const { id } = params;
  const product = await ApiProduct.getLatestProductById(id);
  return (
    <div>
      <p>{JSON.stringify(product)}</p>
    </div>
  );
}
