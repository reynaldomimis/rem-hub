import React from "react";
import SwiperCard from "./../components/SwiperCard";
import { injector } from "./../data/data";

export default function Home() {
  return (
    <>
      {/* Card Carousel using Swiper */}
      <SwiperCard data={injector} />
    </>
  );
}
