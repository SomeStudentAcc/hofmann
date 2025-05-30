import clsx from "clsx";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function ProductCard({ className }: Props) {
  return (
    <Link href={'product/1'}>
      <div className={clsx("border bg-[#161616] relative ", className)}>
        <div className="">
          <Image
            src={
              "https://www.hofmann.uz/storage/products/Z05eE12kS6zwIiRCg1Sh9NWLLtRswz1DBfMcF024.webp"
            }
            width={420}
            height={500}
            className="w-full"
            alt=""
          />
        </div>
        <p className="text-[#E4E4E4] p-1 sm:p-3 md:p-4 leading-4 text-[12px] md:text-base">
          Вытяжка Hofmann HN60S/HF
        </p>
        <div className="absolute right-0 top-0 z-10 p-5">
          <Heart className="text-white" size={20} />
        </div>
      </div>
    </Link>
  );
}
