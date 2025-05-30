import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const menuItems = [
  "Встраиваемая техника",
  "Климатическая техника",
  "Сантехника",
  "Техника для дома",
  "Техника для кухни",
  "Отдельно стоящая техника",
];

interface Props {
  isMobNav: boolean;
  setMobNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMobile({ isMobNav, setMobNav }: Props) {
  return (
    <>
      {/* Overlay */}
      {isMobNav && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobNav(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-full sm:max-w-[300px] bg-[#212121] text-white z-50 transform transition-transform duration-300 ${
          isMobNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-5 overflow-y-auto gap-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Меню</h2>
            <button
              className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full text-white group cursor-pointer transition duration-200 "
              onClick={() => setMobNav(false)}
            >
              <X
                size={24}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>

          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between text-[#666666] items-center border-b border-white/10 py-4 cursor-pointer hover:text-gray-300"
              >
                <span>{item}</span>
                <ChevronRight className="w-4 h-4" />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5">
            <Link href={'/service-center'} className="text-[#666666]">Сервисный центр</Link>
            <Link href={'/about-company'} className="text-[#666666]">О компании</Link>
            <p className="text-[#666666]">Карьера</p>
          </div>

          <div className="flex flex-col gap-5 text-white">
            <p>Youtube</p>
            <p>Instagram</p>
            <p>Telegram</p>
          </div>

          <div className="flex flex-col gap-1 text-white mt-auto">
            <p className="text-[#666666]">По любым вопросам звоните:</p>
            <p>+998 55 510-30-00</p>
          </div>
        </div>
      </div>
    </>
  );
}
