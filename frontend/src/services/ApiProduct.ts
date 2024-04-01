import ApiClient from "./ApiClient";
import { META, PRODUCT } from "@/utils/types";

const getLatestProducts = async (): Promise<{
  data: PRODUCT[];
  meta: META;
}> => {
  return ApiClient.get("/products?populate=*").then((res) => {
    const data = res.data.data;
    const meta = res.data.meta;

    return { data, meta };
  });
};
const getLatestProductById = async (
  id: string
): Promise<{
  data: PRODUCT;
}> => {
  return ApiClient.get(`/products/${id}?populate=*`).then((res) => {
    const data = res.data.data;
    return { data };
  });
};

const ApiProduct = { getLatestProducts, getLatestProductById };
export default ApiProduct;
