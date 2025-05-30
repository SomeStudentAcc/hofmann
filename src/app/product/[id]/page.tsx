import Breadcrumbs from "@/components/shared/Breadcrumbs";
import MainProducts from "@/components/shared/MainProducts";
import ProductOverview from "@/components/shared/ProductOverview";
import ProductSingleDescription from "@/components/shared/ProductSingleDescription";
import ProductSingleImages from "@/components/shared/ProductSingleImages";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Каталог",
  },
  {
    url: "",
    label: "Вытяжки",
  },
];

export default function Product() {
  return (
    <div className="container mx-auto">
      <Breadcrumbs items={scrums} />
      <div className="flex flex-col md:flex-row gap-5 mb-20">
        <div className="md:flex-1 md:min-w-0">
          <ProductSingleImages />
          <ProductSingleDescription />
        </div>
        <ProductOverview />
      </div>
      <MainProducts title="Рекомендуем" />
    </div>
  );
}
