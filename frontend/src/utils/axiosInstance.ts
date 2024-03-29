import axios from "axios";

const APIKEY: string = process.env.NEXT_PUBLIC_API_KEY || "API_KEY";
const baseURL: string =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";
export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${APIKEY}`,
  },
});
