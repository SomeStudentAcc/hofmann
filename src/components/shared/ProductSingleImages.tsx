"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "../../app/assets/ProductSingleSwiper.css";
import { Heart } from "lucide-react";

const images = [
  {
    id: 1,
    url: "https://www.hofmann.uz/storage/products/Z05eE12kS6zwIiRCg1Sh9NWLLtRswz1DBfMcF024.webp",
  },
  {
    id: 2,
    url: "https://www.hofmann.uz/storage/products/Z05eE12kS6zwIiRCg1Sh9NWLLtRswz1DBfMcF024.webp",
  },
  {
    id: 3,
    url: "https://www.hofmann.uz/storage/products/Z05eE12kS6zwIiRCg1Sh9NWLLtRswz1DBfMcF024.webp",
  },
];

export default function ProductSingleImages() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setSelectedImage(images[0].id);
  }, []);

  const handleThumbnailClick = (index: number, id: number) => {
    setSelectedImage(id);
    swiperRef.current?.slideToLoop(index); // loop-safe navigation
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mb-16"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setSelectedImage(images[realIndex].id);
        }}
      >
        {images.map((el, index) => (
          <SwiperSlide key={index} className="select-none">
            <div className="relative min-h-[300px] max-w-[750px] mx-auto w-full aspect-[3/2]">
              <div
                className="absolute right-0 z-10 p-5"
                onClick={(e) => e.stopPropagation()}
              >
                <Heart size={20} />
              </div>
              <Image
                src={el.url}
                alt={`Product image ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex gap-3 mb-16 ">
        {images.map((el, index) => (
          <div
            onClick={() => handleThumbnailClick(index, el.id)}
            key={index}
            className={`cursor-pointer w-[110px] h-[110px] p-2  transition ${
              selectedImage === el.id && "border"
            }`}
          >
            <Image
              src={el.url}
              alt={`Product image ${index + 1}`}
              width={85}
              height={85}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
