"use client";
import { Globe, Heart, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NavCatalog from "./NavCatalog";

export default function Nav() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobNav, setMobNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHome, setIsHome] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const top = scrollY < 20;
    setIsTop(top);
  }, [scrollY]);

  useEffect(() => {
    const home = pathname === "/";
    setIsHome(home);
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`top-0 group z-30 w-full ${isHome ? "fixed" : "sticky"}`}>
      <div
        className={clsx(
          `border-[#676766] md:border-b group-hover:md:bg-[#222222] ${
            isTop && isHome && "bg-transparent"
          } ${isHovered && "!bg-[#343434]"} ${
            !isTop && !isHovered && "bg-[#343434] md:bg-[#222222]"
          }`
        )}
      >
        <div className="container mx-auto pt-3 md:pt-5 md:py-5 flex justify-between md:justify-start items-center gap-3 md:gap-6">
          <Link href={"/"} className="max-w-[210px] w-full">
            <Image
              src="/logo.svg"
              alt="logo"
              height={20}
              width={210}
              className=" w-full h-full"
            />
          </Link>
          <div className="flex-1 hidden md:block">
            <div className="bg-white rounded-full overflow-hidden relative w-full">
              <Search
                className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 text-gray-400"
                size={17}
              />
              <input
                type="text"
                placeholder="Поиск по каталогу"
                className="pl-10 py-2 w-full rounded-full focus:outline-none text-black"
              />
            </div>
          </div>

          <div className="flex md:gap-7 items-center">
            <div className="hidden md:flex items-center text-white gap-2 cursor-pointer">
              <Globe size={20} />
              <p>Рус</p>
            </div>
            <div className="flex gap-2 md:gap-5">
              <div className="p-3 flex justify-center md:hidden items-center bg-white/10 rounded-full text-white group cursor-pointer">
                <Globe size={20} />
              </div>
              <Link
                href={"/favorites"}
                className="p-3 flex justify-center items-center bg-white/10 rounded-full text-white group cursor-pointer"
              >
                <Heart
                  className="group-hover:text-red-500 transition-colors duration-150 ease-in-out"
                  size={20}
                />
              </Link>
              {isMobNav ? (
                <div
                  onClick={() => setMobNav(false)}
                  className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full text-white group cursor-pointer transition duration-200 active:scale-90"
                >
                  <X
                    size={20}
                    className="transition-transform duration-300 group-hover:rotate-90"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setMobNav(true)}
                  className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full text-white  cursor-pointer transition duration-200 active:scale-90"
                >
                  <Menu size={20} className="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          `hidden md:block border-[#676766] md:border-b group-hover:md:bg-[#222222] ${
            isTop && "bg-transparent"
          } ${isHovered && "!bg-[#343434]"} ${
            !isTop && !isHovered && "bg-[#343434] md:bg-[#222222]"
          }`
        )}
      >
        <div className="container mx-auto flex items-center gap-6 text-white text-[15px]">
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer font-bold py-3 "
          >
            Продукция
          </p>
          <Link href={"/branches"} className="cursor-pointer font-bold py-3 ">
            Магазины
          </Link>
          <Link href={"/sales"} className="cursor-pointer font-bold py-3 ">
            Акции
          </Link>
          <Link href={"/blog"} className="cursor-pointer font-bold py-3 ">
            Блог
          </Link>
          <Link
            href={"/about-company"}
            className="cursor-pointer font-bold py-3 "
          >
            Информация о компании
          </Link>
          <Link
            href={"service-center"}
            className="cursor-pointer font-bold py-3 "
          >
            Сервисный центр
          </Link>
        </div>
      </div>
      <div
        className={`md:hidden py-3  ${isTop && isHome && "bg-transparent"} ${
          !isTop && "bg-[#343434] "
        }`}
      >
        <div className="container mx-auto">
          <div className="md:bg-white  rounded-full  overflow-hidden relative w-full">
            <Search
              className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 text-gray-400"
              size={17}
            />
            <input
              type="text"
              placeholder="Поиск по каталогу"
              className="pl-10 bg-white/10 text-white  placeholder-white py-2 w-full rounded-full focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full bg-[#343434] flex shadow-md  w-full transition-all duration-300  ease-in-out z-50 origin-top ${
          isHovered ? "scale-y-100  h-120 py-4" : "scale-y-0  py-0 h-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavCatalog/>
      </div>
      <NavMobile isMobNav={isMobNav} setMobNav={setMobNav} />
    </nav>
  );
}
