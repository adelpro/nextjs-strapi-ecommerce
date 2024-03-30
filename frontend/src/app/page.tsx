import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import ApiProduct from "@/services/ApiProduct";

export default async function Home() {
  const products = await ApiProduct.getLatestProducts();
  return (
    <main>
      <Hero />
      <ProductList products={products} />
    </main>
  );
}
