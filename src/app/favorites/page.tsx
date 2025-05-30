import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Избранные",
  },
];

export default function Favorites() {
  const data = true;
  return (
    <div className="container mx-auto mb-20 h-full">
      <Breadcrumbs items={scrums} />
      <div>
        {data ? (
          <div>
            <h2 className="text-center text-3xl mb-5">Избранные</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5">
              {[...Array(7)].map((_, i) => (
                <ProductCard key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className=" text-center text-3xl mb-5">Пока ничего нет</h1>
            <div className="flex justify-center">
              <Link
                href={"/"}
                className="border flex justify-center px-5 py-3 text-white cursor-pointer"
              >
                На главную
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
