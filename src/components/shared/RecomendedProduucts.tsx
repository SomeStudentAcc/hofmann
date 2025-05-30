"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type SwiperType from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Props {
  title: string;
}

export default function RecomendedProduucts({ title }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div>
      <div className="relative flex justify-between lg:justify-center">
        <h2 className="mb-10 text-xl lg:text-4xl text-white font-bold">
          {title}
        </h2>

        <div className="absolute right-0 flex gap-3">
          <button
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${
              isBeginning ? "bg-[#111] opacity-50" : "bg-white"
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowLeft className="w-5 h-5 text-[#666]" />
          </button>

          <button
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${
              isEnd ? "bg-[#111] opacity-50 " : "bg-white"
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowRight
              className={`w-5 h-5 ${isEnd ? "text-white" : "text-[#111]"}`}
            />
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
            slidesPerView: 4,
          },
          1360: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1.4,
          },
        }}
      >
        {[...Array(7)].map((_, i) => (
          <SwiperSlide key={i} className="select-none w-full">
            <ProductCard className="min-w-[210px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
