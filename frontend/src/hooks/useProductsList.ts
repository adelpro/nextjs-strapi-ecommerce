"use client";

import axiosInstance from "@/utils/axiosInstance";
import { PRODUCT } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export default function UseProductsList() {
  const queryClient = useQueryClient();
  const getProductsList = async (): Promise<[PRODUCT] | []> => {
    const response = await axiosInstance.get<[PRODUCT]>("/products");
    const productList = response.data;
    console.log("productList", productList);
    return productList || [];
  };
  const productsListQuery = useQuery;
}
