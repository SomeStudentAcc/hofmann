import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductCard from "@/components/shared/ProductCard";
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
    url: "/",
    label: "Вытяжки",
  },
];

export default function CatalogProduct() {
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center text-3xl mb-5">Вытяжки</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5">
          {[...Array(7)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
