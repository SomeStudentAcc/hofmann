import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Акции",
  },
];

export default function Sales() {
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center text-3xl mb-5">Блог</h2>
        <div className="grid grid-cols-2  gap-2.5 md:gap-5">
          {[...Array(7)].map((_, i) => (
            <Link key={i} href={"/sales/1"} className=" bg-[#161616]  relative">
              <div>
                <Image
                  src={"/banner2.jpg"}
                  width={420}
                  height={500}
                  className="w-full"
                  alt=""
                />
              </div>
              <p className="text-[#E4E4E4] p-3 absolute top-0 left-0 line-clamp-2">
                Очистители и увлажнители воздуха: почему HOFMANN станет отличным
                выбором
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
