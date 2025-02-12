"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

export default function FeatureCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="pb-20 pt-16">
      <div className="swiper-container flex h-[559px] w-[1000px] overflow-x-scroll">
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {[1, 2, 3, 4].map((val) => (
            <SwiperSlide key={val}>
              <Image
                src={`/images/land-slide-${val}.png`}
                alt={"1"}
                width={1000}
                height={559}
                priority={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
