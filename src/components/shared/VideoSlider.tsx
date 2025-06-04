"use client";
import React, { useRef, useCallback, useEffect } from "react";
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
  const hasUserInteracted = useRef(false);

  const videos = [
    { src: "/video11.mp4" },
    { src: "/video22.mp4" },
    { src: "/video33.mp4" },
  ];

  const handleRealIndexChange = useCallback(async (swiper: SwiperType) => {
    const idx = swiper.realIndex;
    
    // Pause all videos and reset
    videoRefs.current.forEach((vid) => {
      if (!vid) return;
      vid.pause();
      vid.currentTime = 0;
    });

    // Small delay to ensure pause is processed
    setTimeout(() => {
      const currentVideo = videoRefs.current[idx];
      if (currentVideo) {
        currentVideo.play().catch((err) => {
          console.warn(`Video ${idx} play() error:`, err);
        });
      }
    }, 50);
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    
    // Start first video after a short delay
    setTimeout(() => {
      handleRealIndexChange(swiper);
    }, 100);
  }, [handleRealIndexChange]);

  const handleVideoEnd = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    handleRealIndexChange(swiper);
  }, [handleRealIndexChange]);

  // Handle first user interaction for mobile
  useEffect(() => {
    const handleUserInteraction = () => {
      hasUserInteracted.current = true;
      
      // Try to play current video after user interaction
      if (swiperRef.current) {
        const currentIndex = swiperRef.current.realIndex;
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) {
          currentVideo.currentTime = 0;
          currentVideo.play().catch(console.warn);
        }
      }
    };

    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

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
                onCanPlay={() => {
                  // When video can play and it's the current slide, try to play
                  if (swiperRef.current?.realIndex === i && hasUserInteracted.current) {
                    const video = videoRefs.current[i];
                    if (video && video.paused) {
                      video.play().catch(console.warn);
                    }
                  }
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}