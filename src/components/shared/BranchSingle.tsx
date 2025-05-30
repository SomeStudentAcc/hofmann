import React from "react";

export default function BranchSingle() {
  return (
    <div className="flex gap-5 md:gap-0 flex-col md:flex-row md:justify-between border-[#F3F3F3] border-b py-10">
      <div>
        <h4 className="uppercase text-2xl md:text-4xl font-semibold mb-5">Шоу-рум Ц5</h4>
        <div className="flex flex-col gap-1">
          <p className="uppercase font-semibold">адрес</p>
          <span>
            100017 Узбекистан ул. Шарафа Рашидова Ташкент (ор-р Gentlemen Pub)
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-lg font-semibold">режим работы</h4>
          <span>Ежедневно с 10:00 - 19:00 ; В воскресенье с 11:00 - 18:00</span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-lg font-semibold">контакты</h4>
          <span>+998 71 235 55 05</span>
        </div>
      </div>
    </div>
  );
}
