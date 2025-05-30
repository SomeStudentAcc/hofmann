"use client";
import React, { useRef } from "react";
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

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = () => {
    const activeIndex = swiperRef.current?.realIndex ?? 0;

    videoRefs.current.forEach((video) => {
      if (!video) return;

      // Pause and reset all videos
      video.pause();
      video.currentTime = 0;
    });

    // Safely play the active video
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.play().catch((error) => {
        // Suppress AbortError or any autoplay issues
        console.warn("Video play error:", error);
      });
    }
  };

  const setVideoRef = (el: HTMLVideoElement, index: number) => {
    videoRefs.current[index] = el;
  };

  return (
    <div className="mb-20 lg:mb-20 w-full relative">
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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {["/video11.mp4", "/video22.mp4", "/video33.mp4"].map((src, i) => (
          <SwiperSlide key={i} className="select-none w-full">
            <div className="w-full   relative overflow-hidden">
              <video
                ref={(el) => {
                  if (el) setVideoRef(el, i);
                }}
                className="w-full min-h-[700px] h-full object-cover"
                src={src}
                muted
                autoPlay
                playsInline
                /*  preload='auto' */
                preload="none"
                onEnded={handleVideoEnd}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
