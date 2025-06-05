/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../app/assets/BannerSwiper.css";

export default function VideoSlider2() {
  const swiperRef = useRef<SwiperType | null>(null);

  // An array of refs for each video element
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Play/pause toggle state (used by the pause/play button)
  const [play, setPlay] = useState(true);



  // List of video URLs (you can replace with your real paths)
  const videos = ["/video11.mp4", "/video22.mp4", "/video33.mp4"];

  /**
   * Whenever `play` changes (e.g. user toggles pause/play),
   * we only allow the currently‐active slide’s <video> to play;
   * all others get paused.
   */
  const togglePlay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const activeIndex = swiper.realIndex;
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (play && idx === activeIndex) {
        vid.play().catch((_) => {
          /* swallow autoplay rejections silently */
        });
      } else {
        vid.pause();
      }
    });
  }, [play]);

  // On component mount + whenever `play` flips, re‐apply the logic
  useEffect(() => {
    togglePlay();
  }, [togglePlay]);

  /**
   * Called whenever Swiper’s slide actually changes.
   * We pause all videos except the new “realIndex” slide, which we play.
   */
  const onSlideChange = useCallback((swiper: SwiperType) => {
    const activeIndex = swiper.realIndex;
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeIndex) {
        vid.play().catch((_) => {
          /* if mobile blocks autoplay, we can still leave it paused */
        });
        setPlay(true);
      } else {
        vid.pause();
      }
    });
  }, []);

  /**
   * When Swiper first initializes, record its instance in swiperRef,
   * and also make sure the very first slide’s <video> gets played.
   */
  const onSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;

    // Immediately play the first video (swap “realIndex” into state)
    const firstVid = videoRefs.current[0];
    if (firstVid) {
      firstVid
        .play()
        .then(() => {
          setPlay(true);
        })
        .catch(() => {
          setPlay(false);
        });
    }
  }, []);

  /**
   * When a video ends naturally, advance Swiper to the next slide.
   */
  const onVideoEnded = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    setPlay(true); // ensure play = true so togglePlay will re‐play next slide
  }, []);

  return (
    <div className="home_header_slider__wrapper w-full relative">
      <Swiper
        // Basic Swiper props
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        // Pagination + Navigation
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full"
        onSwiper={onSwiperInit}
        onSlideChange={onSlideChange}
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index} className="select-none w-full">
            <div className="relative w-full min-h-[700px] overflow-hidden">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                className="w-full min-h-[700px] h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"
                onEnded={onVideoEnded}
              >
                <source src={videoSrc} data-src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
