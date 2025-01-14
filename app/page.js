
import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";
import ImageSlider from "./components/ImageSlider";
import products from '../app/data/productsData.js'
import CommonComponet from "./components/CommonComponet";
export default function Home() {
  return (
    <main>
      <ImageSlider />
      <CommonComponet title="New Arrival" products={products}/>
   
      <DressStyle />
      <Affiliate />
    </main>
  );
}
