"use client";
import React, { useRef, useCallback } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "../../app/assets/BannerSwiper.css";

export default function VideoSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const videos = [
    { src: "/video11.mp4" },
    { src: "/video22.mp4" },
    { src: "/video33.mp4" },
  ];

  const handleRealIndexChange = useCallback((swiper: SwiperType) => {
    const idx = swiper.realIndex;
    
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      vid.pause();
      vid.currentTime = 0;
      
      if (i === idx) {
        // Add small delay for mobile
        setTimeout(() => {
          vid.play().catch((err) => {
            console.warn(`Video ${i} play() error:`, err);
          });
        }, 100);
      }
    });
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    
    setTimeout(() => {
      handleRealIndexChange(swiper);
    }, 200);
  }, [handleRealIndexChange]);

  const handleVideoEnd = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    handleRealIndexChange(swiper);
  }, [handleRealIndexChange]);

  return (
    <div className="mb-20 w-full relative">
      <Swiper
        slidesPerView={1}
        observer={true}
        observeParents={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        effect="fade"
        className="w-full"
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
      >
        {videos.map((video, i) => (
          <SwiperSlide key={i} className="select-none w-full">
            <div className="relative w-full overflow-hidden">
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[i] = el;
                  }
                }}
                className="w-full min-h-[700px] h-full object-cover"
                src={video.src}
                muted
                playsInline
                preload="auto"
                onEnded={handleVideoEnd}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}