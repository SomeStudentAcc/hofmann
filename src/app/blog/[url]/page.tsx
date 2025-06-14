import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import React from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/blog",
    label: "Блог",
  },
  {
    url: "/blog/1",
    label: "Очистители воздуха: почему HOFMANN станет отличным выбором",
  },
];

export default function BlogItem() {
  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <h2 className="text-3xl mb-5">
          Очистители воздуха: почему HOFMANN станет отличным выбором
        </h2>
        <div>
          <div className="mb-5">
            <Image
              src={"/blog.webp"}
              width={10000}
              height={400}
              className="w-full"
              alt=""
            />
          </div>
          <article className="[&>p]:m-0 [&>p]:mb-2 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-2">
            <h1 className="text-2xl font-bold mb-2">
              Как Организовать Пространство на Кухне и Сделать Его Функциональным
            </h1>

            <p>Кухня — это сердце дома, где мы готовим, общаемся и проводим много времени. Чтобы сделать её удобной и эффективной, важно правильно организовать пространство.</p>

            <h2>Систематизация</h2>
            <p>Используйте шкафы, ящики и полки с умом. Часто используемые предметы должны быть под рукой, а редко используемые — храниться отдельно. Применяйте органайзеры и контейнеры для мелочей и продуктов.</p>

            <h2>Закрытое хранение</h2>
            <p>Открытые полки выглядят красиво, но часто создают беспорядок. Закрытые шкафы сокращают визуальный шум и помогают поддерживать аккуратный вид кухни.</p>

            <h2>Вертикальное размещение</h2>
            <p>Храните предметы вертикально — это экономит место и делает всё более доступным. Подходят крючки, разделители и сушилки. Исключение — кастрюли, их удобнее хранить стопками.</p>

            <h2>Встраиваемая техника</h2>
            <p>Встраиваемая духовка, микроволновка, посудомоечная машина и холодильник экономят место и поддерживают единый стиль интерьера.</p>

            <h2>Поддержание порядка</h2>
            <p>Регулярная уборка и возвращение вещей на свои места помогает поддерживать чистоту и делает кухню удобной для ежедневного использования.</p>

            <p><strong>Вывод:</strong> Грамотная организация кухни делает её функциональной, уютной и приятной для работы. Не забывайте регулярно обновлять систему хранения и поддерживать порядок.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
