import productApis from "@/Api/productsApis";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  const LatestProducts = productApis.getLatestProducts();
  console.log({ LatestProducts });
  return (
    <main>
      <Hero />
      <ProductList />
    </main>
  );
}
