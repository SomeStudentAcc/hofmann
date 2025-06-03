"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type SwiperType from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// ✅ Correct placement of dynamic import
const MainCategorySingle = dynamic(() => import("./MainCategorySingle"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

interface Props {
  title: string;
}

export default function MainCategories({ title }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="container mx-auto mb-20">
      <div className="relative flex md:hidden justify-between lg:justify-center">
        <h2 className="mb-10 text-xl lg:text-4xl text-white font-bold">
          {title}
        </h2>

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

      <div className="flex w-full overflow-hidden">
        <div className="flex-shrink-0 w-full max-w-[280px] 2xl:max-w-[400px] hidden md:flex items-end">
          <div>
            <h1 className=" text-4xl 2xl:text-5xl font-bold mb-12">
              Лучшие предложения для вас
            </h1>
            <div className="flex gap-5">
              <button
                className={`w-[90px] h-[90px] rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isBeginning ? "bg-white  " : "bg-[#111] opacity-50"
                }`}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
              >
                <ArrowLeft
                  color={`${isBeginning ? "#000000" : "#FFFFFF"}`}
                  size={40}
                />
              </button>

              <button
                className={`w-[90px] h-[90px] rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isEnd ? "bg-white " : "bg-[#111] opacity-50"
                }`}
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
              >
                <ArrowRight
                  color={`${isEnd ? "#000000" : "#FFFFFF"}`}
                  size={40}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Swiper
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
            effect="fade"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 1.4,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {[...Array(7)].map((_, i) => (
              <SwiperSlide key={i} className="select-none w-full ">
                <MainCategorySingle />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
