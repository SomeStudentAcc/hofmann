"use client";
import React, { useRef,  useCallback } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "../../app/assets/BannerSwiper.css";

export default function VideoSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  // Keep refs to all video elements in an array
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // List of videos (you could add an `id` field if you want, but index works fine here)
  const videos = [
    { src: "/video11.mp4" },
    { src: "/video22.mp4" },
    { src: "/video33.mp4" },
  ];

  // When the “real” index changes (i.e. Swiper has settled on a new slide),
  // pause/reset every video, then play just the current one.
  const handleRealIndexChange = useCallback((swiper: SwiperType) => {
    const idx = swiper.realIndex; // 0, 1, or 2 (never a clone index)
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      vid.pause();
      vid.currentTime = 0;
      // If this is the active “real” index, play it
      if (i === idx) {
        vid
          .play()
          .catch((err) => {
            console.warn(`Video ${i} play() error:`, err);
          });
      }
    });
  }, []);

  // Save Swiper instance
  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    // As soon as Swiper is ready, trigger a play on slide 0
    // (loop clones exist, but realIndex starts at 0)
    swiper.on("init", () => {
      handleRealIndexChange(swiper);
    });
  }, [handleRealIndexChange]);

  // If you want to move to the next slide when a video ends:
  const handleVideoEnd = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  // Whenever Swiper’s realIndex changes (after transition), call our handler
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
