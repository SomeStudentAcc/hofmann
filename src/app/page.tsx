import Blog from "@/components/shared/Blog";
import CategoryGrid from "@/components/shared/CategoryGrid";
import MainCategories from "@/components/shared/MainCategories";
import MainProducts from "@/components/shared/MainProducts";
import VideoSlider2 from "@/components/shared/VideoSlider2";

export default function Home() {
  return (
    <>
      <VideoSlider2 />
      <MainCategories title="Для вас" />
      <CategoryGrid />
      <MainProducts title="Новинки" />
      <Blog />
    </>
  );
}
