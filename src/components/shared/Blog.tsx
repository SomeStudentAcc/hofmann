"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type SwiperType from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogSingle from "./BlogSingle";

export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="container mx-auto mb-20">
      <div className="relative mb-10 flex justify-between lg:justify-center">
        <h2 className=" text-xl lg:text-4xl text-white font-bold">Блог</h2>

        <div className="absolute right-0 flex gap-3">
          <button
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors duration-200 ${
              isBeginning ? "bg-white" : "bg-[#111] opacity-50"
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowLeft
              color={`${isBeginning ? "#000000" : "#FFFFFF"}`}
              size={20}
            />
          </button>

          <button
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors duration-200 ${
              isEnd ? "bg-white " : "bg-[#111] opacity-50"
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowRight color={`${isEnd ? "#000000" : "#FFFFFF"}`} size={20} />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        navigation={false}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          1400: {
            slidesPerView: 2,
          },
          1360: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {[...Array(7)].map((_, i) => (
          <SwiperSlide key={i} className="select-none w-full">
            <BlogSingle />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
