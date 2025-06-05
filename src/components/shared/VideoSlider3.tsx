/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../app/assets/BannerSwiper.css";

export default function VideoSlider3() {
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [play, setPlay] = useState(true);

  const videos = ["/video11.mp4", "/video22.mp4", "/video33.mp4"];

  // Play active video and pause others
  const handleVideoPlayback = useCallback((activeIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video
          .play()
          .then(() => setPlay(true))
          .catch(() => setPlay(false));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, []);

  const togglePlay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    handleVideoPlayback(swiper.realIndex);
  }, [handleVideoPlayback]);

  useEffect(() => {
    togglePlay();
  }, [togglePlay]);

  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      handleVideoPlayback(swiper.realIndex);
    },
    [handleVideoPlayback]
  );

  const onSwiperInit = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;
      handleVideoPlayback(swiper.realIndex);
    },
    [handleVideoPlayback]
  );

  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={1}
        centeredSlides
        loop
        mousewheel
        keyboard
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
        className="w-full"
        onSwiper={onSwiperInit}
        onSlideChange={onSlideChange}
      >
        {videos.map((src, i) => (
          <SwiperSlide key={i} className="w-full min-h-[700px]">
            <div className="relative w-full h-full overflow-hidden">
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className="w-full min-h-[700px] h-full object-cover"
                src={src}
                muted
                playsInline
                preload="auto"
                onEnded={() => setPlay(false)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
