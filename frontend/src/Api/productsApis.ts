import axiosInstance from "../utils/axiosInstance";

const getLatestProducts: any = () => {
  axiosInstance.get("/products").then((res) => {
    return res.data;
  });
};
const productApis = { getLatestProducts };
export default productApis;
