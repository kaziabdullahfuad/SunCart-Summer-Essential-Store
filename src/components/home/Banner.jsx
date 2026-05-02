import banner from "@/assets/warmbanner.png"
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";

import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[#F9F7F2] ">
            <div
  className="lg:w-10/12 mx-auto   hero min-h-[70vh]"
  style={{
    backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <span className="bg-[#FF9F1C] rounded-full p-3 w-fit border">Hot Deals</span>
      <h1 className="mb-5 text-5xl font-bold mt-4">Summer Sale <span className="text-[#FF9F1C]"> 50% OFF</span></h1>
      <p className="mb-5">
        Embrace the warmth of the season with our curated collection of high-end summer essentials. From sun-ready skincare to iconic beachwear.
      </p>
      <button className="btn bg-[#FF9F1C] text-white font-semibold">
        <Link href={'/products'}>Shop the Collection</Link>
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;