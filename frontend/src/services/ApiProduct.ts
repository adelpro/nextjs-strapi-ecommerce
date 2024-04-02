import ApiClient from "./ApiClient";
import { META, PRODUCT } from "@/utils/types";

const getLatestProducts = async (): Promise<{
  products: PRODUCT[];
  meta: META;
}> => {
  const data = await ApiClient.get("/products?populate=*").then((res) => {
    const products = res.data.data;
    const meta = res.data.meta;
    return { products, meta };
  });
  return data;
};
const getLatestProductsByCategory = async (
  category: string,
): Promise<PRODUCT[]> => {
  const data = await ApiClient.get(
    `/products?filters[Category][$eq]=${category}&populate=*`,
  ).then((res) => {
    return res.data.data;
  });

  return data;
};
const getProductById = async (id: string): Promise<PRODUCT> => {
  const product = await ApiClient.get(`/products/${id}?populate=*`).then(
    (res) => {
      const product = res.data.data;
      return product;
    },
  );
  return product;
};

const ApiProduct = {
  getLatestProducts,
  getLatestProductsByCategory,
  getProductById,
};
export default ApiProduct;
