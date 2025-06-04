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
  const isPlayingRef = useRef<boolean[]>([]);

  const videos = [
    { src: "/video11.mp4" },
    { src: "/video22.mp4" },
    { src: "/video33.mp4" },
  ];

  // Helper function to safely play video with better error handling
  const safePlayVideo = useCallback(
    async (video: HTMLVideoElement, index: number) => {
      if (!video) return false;

      try {
        // Reset video state
        video.currentTime = 0;

        // Ensure video is loaded
        if (video.readyState < 2) {
          await new Promise((resolve) => {
            const handleCanPlay = () => {
              video.removeEventListener("canplay", handleCanPlay);
              resolve(void 0);
            };
            video.addEventListener("canplay", handleCanPlay);
            video.load(); // Force reload
          });
        }

        await video.play();
        isPlayingRef.current[index] = true;
        return true;
      } catch (err) {
        console.warn(`Video ${index} play() error:`, err);
        isPlayingRef.current[index] = false;

        // On mobile, sometimes we need user interaction first
        // Try to play again after a short delay
        setTimeout(async () => {
          try {
            await video.play();
            isPlayingRef.current[index] = true;
          } catch (retryErr) {
            console.warn(`Video ${index} retry play() error:`, retryErr);
          }
        }, 100);

        return false;
      }
    },
    []
  );

  // Enhanced video management
  const handleRealIndexChange = useCallback(
    async (swiper: SwiperType) => {
      const idx = swiper.realIndex;

      // First pause all videos
      videoRefs.current.forEach((vid, i) => {
        if (vid && isPlayingRef.current[i]) {
          vid.pause();
          isPlayingRef.current[i] = false;
        }
      });

      // Small delay to ensure pause is processed
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Then play the current video
      const currentVideo = videoRefs.current[idx];
      if (currentVideo) {
        await safePlayVideo(currentVideo, idx);
      }
    },
    [safePlayVideo]
  );

  // Enhanced Swiper initialization
  const handleSwiperInit = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;

      // Initialize playing state array
      isPlayingRef.current = new Array(videos.length).fill(false);

      // Wait for DOM to be ready then start first video
      setTimeout(() => {
        handleRealIndexChange(swiper);
      }, 100);
    },
    [handleRealIndexChange, videos.length]
  );

  const handleVideoEnd = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      handleRealIndexChange(swiper);
    },
    [handleRealIndexChange]
  );

  // Handle user interaction to enable autoplay on mobile
  useEffect(() => {
    const handleUserInteraction = () => {
      // Try to play current video after user interaction
      if (swiperRef.current) {
        const currentIndex = swiperRef.current.realIndex;
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo && !isPlayingRef.current[currentIndex]) {
          safePlayVideo(currentVideo, currentIndex);
        }
      }
    };

    // Add event listeners for user interaction
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });
    document.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
    };
  }, [safePlayVideo]);

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
        // Add some mobile-specific settings
        touchRatio={1}
        touchAngle={45}
        grabCursor={true}
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
                preload="metadata" // Changed from "auto" to reduce initial load
                onEnded={handleVideoEnd}
                // Add mobile-specific attributes
                webkit-playsinline="true"
                x5-playsinline="true"
                // Ensure video is ready for mobile
                onLoadedData={() => {
                  // Video data is loaded, ready to play if needed
                  if (
                    swiperRef.current?.realIndex === i &&
                    !isPlayingRef.current[i]
                  ) {
                    const video = videoRefs.current[i];
                    if (video) {
                      safePlayVideo(video, i);
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
