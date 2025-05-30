import BlogSingle from "@/components/shared/BlogSingle";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Блог",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center text-3xl mb-5">Блог</h2>
        <div className="grid grid-cols-2  gap-2.5 md:gap-5">
          {[...Array(7)].map((_, i) => (
            <BlogSingle key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
