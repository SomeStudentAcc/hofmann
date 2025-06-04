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

  // Function to unload non-active videos
  const unloadInactiveVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        // Load video if not already loaded
        if (!video.src || video.src.indexOf(videos[idx]) === -1) {
          video.src = videos[idx];
          video.load();
        }
      } else {
        video.pause();
        video.removeAttribute("src");
        video.load(); // Free memory
      }
    });
  };

  const togglePlay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const activeIndex = swiper.realIndex;

    unloadInactiveVideos(activeIndex);

    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo
        .play()
        .then(() => setPlay(true))
        .catch(() => setPlay(false));
    }
  }, []);

  useEffect(() => {
    togglePlay();
  }, [togglePlay]);

  const onSlideChange = useCallback((swiper: SwiperType) => {
    const activeIndex = swiper.realIndex;
    unloadInactiveVideos(activeIndex);

    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo
        .play()
        .then(() => setPlay(true))
        .catch(() => setPlay(false));
    }
  }, []);

  const onSwiperInit = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;
      togglePlay();
    },
    [togglePlay]
  );

  const onVideoEnded = useCallback(() => {
    swiperRef.current?.slideNext();
    setPlay(true);
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
                  if (el) {
                    videoRefs.current[i] = el;
                  }
                }}
                className="w-full min-h-[700px] h-full object-cover"
                muted
                playsInline
                preload="metadata"
                onEnded={onVideoEnded}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
