import Banner from "@/components/home/Banner";
import PopularProducts from "@/components/home/PopularProducts";
import SummerCare from "@/components/home/SummerCare";
import TopBrands from "@/components/home/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      <SummerCare></SummerCare>
      <TopBrands></TopBrands>
    </div>
  );
}
