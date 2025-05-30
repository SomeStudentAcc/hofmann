import Image from "next/image";
import React from "react";

export default function MainCategorySingle() {
  return (
    <div className="relative w-full h-[420px] lg:h-[640px]  overflow-hidden bg-black text-white rounded-md">
      <Image
        src="/foru1.webp"
        alt="Посудомоечные машины"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-lg lg:text-xl font-semibold mb-4">
          Посудомоечные машины
        </h3>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          подробнее
        </button>
      </div>
    </div>
  );
}
