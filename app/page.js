import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <main>
      <ImageSlider />
      <NewArrival />
      <TopSelling />
      <DressStyle />
      <Affiliate />
    </main>
  );
}
