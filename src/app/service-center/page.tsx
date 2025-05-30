import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ServiceCenterMap from "@/components/shared/ServiceCenterMap";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Сервисный центр",
  },
];

export default function ServiceCenter() {
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center text-3xl mb-5">Сервисный центр</h2>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="w-full lg:w-1/2">
            <ServiceCenterMap />
          </div>
          <div className="lg:w-1/2 bg-[#141414] p-5 flex gap-7  lg:justify-center items-center">
            <div className="flex gap-5 flex-col">
              <div>
                <p className="text-[#666666]">По любым вопросам звоните:</p>
                <h2 className="text-white text-2xl">+998 55 501-29-29</h2>
              </div>
              <div>
                <p className="text-[#666666]">
                  Шайхонтохур рн ул.Тахтапул дарвоза. Дом 3Б
                </p>
                <p className="text-[#666666]">ежим работы:</p>
                <p className="text-[#666666]">
                  Понедельник - с 9:00 утра до 18:00
                </p>
                <p className="text-[#666666]">Вторник с 9:00 утра до 18:00.</p>
                <p className="text-[#666666]">Среда - с 09:00 до 18:00</p>
                <p className="text-[#666666]">Четверг- с 09:00 до 18:00</p>
                <p className="text-[#666666]">Пятница: с 09:00 до 18:00</p>
                <p className="text-[#666666]">Суббота: с 09:00 до 16:00</p>
                <p className="text-[#666666]">
                  Воскресенье: Онлайн прием заявок
                </p>
              </div>
              <div className="text-white text-2xl flex flex-col gap-2">
                <h2>Telegram</h2>
                <h2>@servis2929</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
