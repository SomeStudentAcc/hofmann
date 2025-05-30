"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../../app/assets/BannerSwiper.css";

export default function MainBanner() {
  return (
    <div className="mb-20 lg:mb-20 w-full relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        effect="fade"
        className="w-full"
      >
        <SwiperSlide className="select-none w-full">
          <div className="w-full h-[400px] lg:h-[900px] relative overflow-hidden">
            <Image
              src={"/banner2.jpg"}
              fill
              priority
              className="object-cover"
              alt="Banner image 1"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="select-none w-full">
          <div className="w-full h-[400px] lg:h-[900px] relative overflow-hidden">
            <Image
              src={"/banner3.jpg"}
              fill
              priority
              className="object-cover"
              alt="Banner image 2"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
