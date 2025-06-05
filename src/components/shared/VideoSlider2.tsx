/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/assets/BannerSwiper.css";


const videos = ["/video11.mp4", "/video22.mp4", "/video33.mp4"];

export default function VideoSlider() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (
        index === swiper.realIndex ||
        index === (swiper.realIndex + 1) % videos.length
      ) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  useEffect(() => {
    // Play first video after mount
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full h-[700px] mb-20">
      <Swiper
        loop
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        keyboard
        mousewheel
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="relative w-full h-full">
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el;
                  }
                }}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
