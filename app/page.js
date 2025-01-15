
import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";
import ImageSlider from "./components/ImageSlider";
import products from '../app/data/productsData.js'
import CommonComponent from "./components/CommonComponent";
export default function Home() {
  return (
    <main>
      <ImageSlider />
      <CommonComponent title="New Arrival" products={products}/>
      <CommonComponent title="Top Selling" products={products}/>
   
      <DressStyle />
      <Affiliate />
    </main>
  );
}
