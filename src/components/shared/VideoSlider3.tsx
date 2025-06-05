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

  const unloadInactiveVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      const shouldLoad =
        idx === activeIndex ||
        idx === (activeIndex + 1) % videos.length ||
        idx === (activeIndex - 1 + videos.length) % videos.length;

      if (shouldLoad) {
        // Assign new <source> only if needed
        const sourceEl = video.querySelector("source");
        if (sourceEl && sourceEl.getAttribute("src") !== videos[idx]) {
          sourceEl.setAttribute("src", videos[idx]);
          video.load();
        }
      } else {
        video.pause();
        const sourceEl = video.querySelector("source");
        if (sourceEl) {
          sourceEl.removeAttribute("src");
        }
        video.load(); // Free up memory
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
    <div className="w-full relative mb-20">
      <Swiper
        slidesPerView={1}
        centeredSlides
        loop
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
                autoPlay
                playsInline
                preload="metadata"
                onEnded={onVideoEnded}
              >
                {/* Default empty <source> — updated dynamically */}
                <source type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
