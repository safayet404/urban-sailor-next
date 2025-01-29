// app/page.js
import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";
import ImageSlider from "./components/ImageSlider";
import CommonComponent from "./components/CommonComponent";
import { fetchData } from "./lib/fetchData";
import CommonComponentWrapper from "./components/CommonComponentWrapper";

export default async function Home() {
  const { productsData, productsData1 } = await fetchData();

  const products = productsData.map((edge) => edge.node);
  const topSellingProducts = productsData1.map((edge) => edge.node);

  return (
    <main>
      <ImageSlider />
      <CommonComponentWrapper title="New Arrival" products={products} />
      <CommonComponentWrapper title="Top Selling" products={topSellingProducts} />
      <DressStyle />
      <Affiliate />
    </main>
  );
}

// export const revalidate = 10; // Revalidate every 10 seconds
