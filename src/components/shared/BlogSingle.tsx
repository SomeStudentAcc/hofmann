import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogSingle() {
  return (
    <Link href={'/blog/1'} className=" bg-[#161616]  relative">
      <div className="h-auto max-h-[360px]">
        <Image
          src={"/blog.webp"}
          width={420}
          height={500}
          className="w-full"
          alt=""
        />
      </div>
      <p className="text-[#E4E4E4] p-3 absolute top-0 left-0 line-clamp-2">
        Очистители и увлажнители воздуха: почему HOFMANN станет отличным выбором
      </p>
    </Link>
  );
}
