// app/page.js
import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";
import ImageSlider from "./components/ImageSlider";
import CommonComponent from "./components/CommonComponent";
import { fetchData } from "./lib/fetchData";

export default async function Home() {
  const { productsData, productsData1 } = await fetchData();

  // Map the data to get the product nodes
  const products = productsData.map((edge) => edge.node);
  const topSellingProducts = productsData1.map((edge) => edge.node);
  console.log(products);
  

  return (
    <main>
      <ImageSlider />
      <CommonComponent title="New Arrival" products={products} />
      <CommonComponent title="Top Selling" products={topSellingProducts} />
      <DressStyle />
      <Affiliate />
    </main>
  );
}