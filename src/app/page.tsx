import dynamic from "next/dynamic";
import CategoryGrid from "@/components/shared/CategoryGrid";
import MainProducts from "@/components/shared/MainProducts";

// Dynamically import heavy Swiper-based components with SSR disabled
const VideoSlider = dynamic(() => import('@/components/shared/VideoSlider'), {
  ssr: false,
  loading: () => <div style={{ height: 700 }}>Loading video...</div>,
});
const MainCategories = dynamic(() => import('@/components/shared/MainCategories'), {
  ssr: false,
});
const Blog = dynamic(() => import('@/components/shared/Blog'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <VideoSlider />
      <MainCategories title="Для вас" />
      <CategoryGrid />
      <MainProducts title="Новинки" />
      <Blog />
    </>
  );
}
