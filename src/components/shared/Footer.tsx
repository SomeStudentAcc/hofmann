import { Instagram, Send, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#222222] border-[#676766] border-t  text-white">
      <div className="container mx-auto flex-col md:flex-row  gap-10 md:gap-0 flex md:justify-between justify-start py-20">
        <Image
          className="cursor-pointer"
          src={"/logo2.svg"}
          width={155}
          height={17}
          alt=""
        />

        <div>
          <h4 className="text-xl mb-5">Информация</h4>
          <ul className="flex flex-col gap-2">
            <Link href={"/branches"} className="cursor-pointer">
              Магазины
            </Link>
            <li className="cursor-pointer">Новинки</li>
            <Link href={"/sales"} className="cursor-pointer">
              Акции
            </Link>
            <Link href={"/blog"} className="cursor-pointer">
              Блог
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-5">О нас</h4>
          <ul className="flex flex-col gap-2">
            <Link href={"/about-company"} className="cursor-pointer">
              О компании
            </Link>
            <li className="cursor-pointer">Вакансии</li>
            <li className="cursor-pointer">Каталог</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-xl">Наши соц сети</h4>
          <div className="flex gap-2">
            <div className="p-3 flex justify-center items-center bg-white/10 rounded-full text-white cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="p-3 flex justify-center items-center bg-white/10 rounded-full text-white cursor-pointer">
              <Youtube size={20} />
            </div>
            <div className="p-3 flex justify-center items-center bg-white/10 rounded-full text-white cursor-pointer">
              <Send size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
