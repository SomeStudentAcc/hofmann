import Blog from "@/components/shared/Blog";
import CategoryGrid from "@/components/shared/CategoryGrid";
import MainCategories from "@/components/shared/MainCategories";
import MainProducts from "@/components/shared/MainProducts";
import VideoSliderContainer from "@/components/shared/VideoSliderContainer";

export default function Home() {
  return (
    <>
      <VideoSliderContainer />
      <MainCategories title="Для вас" />
      <CategoryGrid />
      <MainProducts title="Новинки" />
      <Blog />
    </>
  );
}
