import { META, PRODUCT } from "@/utils/types";
import ApiClient from "./ApiClient";

const getLatestProducts = async (): Promise<{
  data: PRODUCT[];
  meta: META;
}> => {
  console.log("Fetching products...");
  return ApiClient.get("/products?populate=*").then((res) => {
    const data = res.data.data;
    const meta = res.data.meta;

    return { data, meta };
  });
};

const ApiProduct = { getLatestProducts };
export default ApiProduct;
