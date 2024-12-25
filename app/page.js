import Image from "next/image";
import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";

export default function Home() {
  return (
  <main>
   <NewArrival />
   <TopSelling/>
  </main>
  );
}
