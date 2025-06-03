import Blog from "@/components/shared/Blog";
import CategoryGrid from "@/components/shared/CategoryGrid";
import MainCategories from "@/components/shared/MainCategories";
import MainProducts from "@/components/shared/MainProducts";
import VideoSlider from "@/components/shared/VideoSlider";

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
