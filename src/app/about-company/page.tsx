import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CompanyMap from "@/components/shared/CompanyMap";
import Image from "next/image";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Информация о компании",
  },
];

export default function AboutCompany() {
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-center text-3xl mb-5">Информация о компании</h2>
        <div className="flex justify-center mb-16">
          <p>О компании</p>
        </div>
        <div className="mb-16">
          <div className="mb-16">
            <Image
              src={"/company1.jpg"}
              width={10000}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col text-[15px]  gap-5 w-full max-w-[1120px]">
              <p className="text-[#999999]">
                HOFMANN – это бренд бытовой техники, специализирующийся на
                создании продукции, соединяющей в себе основные запросы
                покупателей - высокое качество, удобство в использовании,
                продуманный дизайн и технологичность.
              </p>
              <p className="text-[#999999]">
                Наша цель – предложить нашим клиентам бытовую технику, которая
                сделает их жизнь удобней, технологичней и приятней. Мы верим,
                что каждый человек заслуживает уютную и комфортную жизнь, наша
                же миссия - предоставить продукты, которые сделают это
                возможным. Именно этим определяется стремление компании к тому,
                чтобы наши клиенты получали максимальное удовольствие от
                использования нашей техники, наслаждались ее комфортом и
                экономили свое время и усилия.
              </p>
              <p className="text-[#999999]">
                Философия компании HOFMANN базируется на принципе Ценность
                комфорта, что позволяет нам неуклонно улучшать качество наших
                продуктов, предоставляя таким образом нашим покупателям
                технологичную бытовую технику, которая долгое время будет
                радовать своим дизайном и надежностью.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-1/2  p-5 flex gap-7  lg:justify-center items-center">
              <div className="flex gap-5 flex-col">
                <h2 className="text-white text-2xl ">Партнерам</h2>
                <div className="flex flex-col text-[15px]  gap-5 w-full max-w-[1120px]">
                  <p className="text-[#999999]">
                    Всегда рады выслушать ваши предложения и сотрудничать с вами
                    в будущем.
                  </p>
                  <p className="text-[#999999]">
                    Компания HOFMANN всегда в поисках партнеров и всегда рада
                    приветствовать новых производителей кухонной мебели,
                    дизайнеров или строительные компании в качестве новых
                    партнеров.
                  </p>
                  <p className="text-[#999999]">
                    У нашей компании всегда найдется предложение, от которого не
                    может отказаться наш партнер т.к. мы всегда думаем в первую
                    очередь о наших партнерах и их клиентах и обеспечиваем
                    максимальное удовлетворение всех сторон путем предоставления
                    самых гибких условий.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="h-full">
                <Image
                  src={"/company2.webp"}
                  width={10000}
                  height={1000}
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="w-full lg:w-1/2">
            <CompanyMap />
          </div>
          <div className="lg:w-1/2 bg-[#141414] p-5 flex gap-7  lg:justify-center items-center">
            <div className="flex gap-5 flex-col w-full max-w-[300px]">
              <div>
                <p className="text-[#666666]">По любым вопросам звоните:</p>
                <h2 className="text-white text-2xl">+998 55 510 30 009</h2>
              </div>

              <p className="text-[#666666]">
                г. Ташкент, ул Шарафа Рашидова, 16 Режим работы: пн. – вс. с
                10:00 до 19:00
              </p>

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
