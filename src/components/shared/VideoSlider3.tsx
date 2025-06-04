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
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [play, setPlay] = useState(true);

  const videos = ["/video11.mp4", "/video22.mp4", "/video33.mp4"];

  const togglePlay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const activeIndex = swiper.realIndex;
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (play && idx === activeIndex) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [play]);

  useEffect(() => {
    togglePlay();
  }, [togglePlay]);

  const onSlideChange = useCallback((swiper: SwiperType) => {
    const active = swiper.realIndex;
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === active) {
        vid.play().catch(() => {});
        setPlay(true);
      } else {
        vid.pause();
      }
    });
  }, []);

  const onSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    // Auto-play the very first video on mount
    const firstVid = videoRefs.current[0];
    if (firstVid) {
      firstVid
        .play()
        .then(() => setPlay(true))
        .catch(() => setPlay(false));
    }
  }, []);

  const onVideoEnded = useCallback(() => {
    // Advance to next slide when the current video finishes
    swiperRef.current?.slideNext();
    setPlay(true); // ensure the next video is allowed to play
  }, []);

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
                  if (el) videoRefs.current[i] = el;
                }}
                className="w-full min-h-[700px] h-full object-cover"
                muted
                playsInline
                preload="metadata"
                onEnded={onVideoEnded}
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
