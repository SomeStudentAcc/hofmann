import React from "react";

export default function ProductSingleDescription() {
  const characteristics = [
    { label: "Цвет", value: "Стальной" },
    { label: "Ширина", value: "600 мм" },
    { label: "Количество скоростей", value: "4" },
    { label: "Производительность (м3/ч)", value: "1000" },
  ];

  return (
    <div>
      <div className="mb-16">
        <h4 className="mb-4  text-3xl">Основные характиристики</h4>

        <div className="flex flex-col gap-4">
          {characteristics.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <p className="text-[#999999] pr-2 ">{item.label}</p>
              <div className="flex-1 border-b border-dashed border-[#999999] "></div>
              <p className="text-[#999999] pl-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-4  text-3xl">Описание</h4>

        <p className="text-[#999999]">
          Кухонные вытяжки от Hofmann сочетают в себе элегантность и
          функциональность, создавая идеальное дополнение к современной кухне.
          Они предназначены для эффективной очистки воздуха, удаляя копоть и жир
          во время приготовления пищи, тем самым защищая мебель, стены и потолок
          от загрязнений
        </p>
      </div>
    </div>
  );
}
