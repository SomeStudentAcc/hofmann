"use client";
import React, { useRef, useState, useEffect } from "react";
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
  // Keep track of which slide is “active”—initialize to 0 so first video is rendered immediately
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Whenever activeIndex changes, pause & reset all videos, then play the new one (if exists)
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.pause();
      v.currentTime = 0;
    });
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo
        .play()
        .catch((err) => {
          console.warn("Video play error:", err);
        });
    }
  }, [activeIndex]);

  // Called when swiper is first initialized
  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.realIndex); // usually 0 on first init
  };

  // Called on every slide change
  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
  };

  // When a video ends, advance the swiper
  const handleVideoEnd = () => {
    swiperRef.current?.slideNext();
  };

  // Save refs for each <video>
  const setVideoRef = (el: HTMLVideoElement, index: number) => {
    videoRefs.current[index] = el;
  };

  // List of video sources
  const videos = ["/video11.mp4", "/video22.mp4", "/video33.mp4"];

  return (
    <div className="mb-20 w-full relative">
      <Swiper
        slidesPerView={1}
        observer={true}
        observeParents={true}
        loop={true} // if you still want infinite loop, Swiper will clone slides—but only the clones matching activeIndex will mount/videos play
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        effect="fade"
        className="w-full"
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
      >
        {videos.map((src, i) => (
          <SwiperSlide key={i} className="select-none w-full">
            <div className="relative w-full  overflow-hidden">
              {/**
               * Only render the <video> if its index === activeIndex.
               * That way, on first load (activeIndex=0), <video> at i=0 mounts immediately.
               * When activeIndex changes, the old <video> unmounts and frees memory.
               */}
              {activeIndex === i && (
                <video
                  ref={(el) => {
                    if (el) setVideoRef(el, i);
                  }}
                  className="w-full min-h-[700px] h-full object-cover"
                  src={src}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  onEnded={handleVideoEnd}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}