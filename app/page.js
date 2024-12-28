import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";

export default function Home() {
  return (
    <main>
      <NewArrival />
      <TopSelling />
      <DressStyle />
      <Affiliate />
    </main>
  );
}
