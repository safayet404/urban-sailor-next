import Image from "next/image";
import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";

export default function Home() {
  return (
  <main>
   <NewArrival />
   <TopSelling/>
   <DressStyle/>
  </main>
  );
}
