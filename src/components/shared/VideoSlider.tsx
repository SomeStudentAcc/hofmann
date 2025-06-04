/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useRef, useEffect, useCallback } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "../../app/assets/BannerSwiper.css";

/**
 * SlideVideo now takes an `id` (string) instead of an index.
 * We store each video element in videoRefs.current[id] so that
 * even clones share the same id key.
 */
function SlideVideo({
  id,
  src,
  videoRefs,
  onVideoEnd,
}: {
  id: string;
  src: string;
  videoRefs: React.MutableRefObject<Record<string, HTMLVideoElement>>;
  onVideoEnd: () => void;
}) {
  const { isActive } = useSwiperSlide();

  // Whenever this slide becomes active/inactive, play or pause
  useEffect(() => {
    const vid = videoRefs.current[id];
    if (!vid) return;

    if (isActive) {
      vid
        .play()
        .catch((err) => {
          console.warn(`Video (${id}) play() error:`, err);
        });
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  }, [isActive, id, videoRefs]);

  // Attach the ref once for this id
  const setRef = useCallback(
    (el: HTMLVideoElement | null) => {
      if (el) {
        videoRefs.current[id] = el;
      }
    },
    [id, videoRefs]
  );

  return (
    <video
      ref={setRef}
      className="w-full min-h-[700px] h-full object-cover"
      src={src}
      muted
      playsInline
      autoPlay={false} // we control play() “manually” in the effect
      preload="auto"
      onEnded={onVideoEnd}
    />
  );
}

export default function VideoSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  // Now using an object keyed by `id` instead of an array
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});

  const handleVideoEnd = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    // No need to sync an index in state; each SlideVideo watches isActive itself.
  }, []);

  // Array of { id, src } instead of just strings
  const videos: { id: string; src: string }[] = [
    { id: "vid1", src: "/video11.mp4" },
    { id: "vid2", src: "/video22.mp4" },
    { id: "vid3", src: "/video33.mp4" },
  ];

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
        {videos.map(({ id, src }) => (
          <SwiperSlide key={id} className="select-none w-full">
            <div className="relative w-full overflow-hidden">
              <SlideVideo
                id={id}
                src={src}
                videoRefs={videoRefs}
                onVideoEnd={handleVideoEnd}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
