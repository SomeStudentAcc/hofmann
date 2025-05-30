'use client'
import dynamic from "next/dynamic";
import React from "react";

const VideoSlider = dynamic(() => import("./VideoSlider"), {
  ssr: false,
  loading: () => <div style={{ height: 700 }}>Loading video...</div>,
});

export default function VideoSliderContainer() {
  return <VideoSlider />;
}
