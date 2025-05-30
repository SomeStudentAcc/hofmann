import Link from "next/link";
import React from "react";

type GridConfig = {
  colSpan: string;
  rowSpan: string;
  height: string;
};

const getGridConfig = (index: number) => {
  const configs: { [key: number]: GridConfig } = {
    0: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    1: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    2: { colSpan: "col-span-6", rowSpan: "row-span-2", height: "h-full" },
    3: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    4: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    5: { colSpan: "col-span-6", rowSpan: "row-span-2", height: "h-full" },
    6: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    7: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    8: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
    9: { colSpan: "col-span-3", rowSpan: "", height: "h-60" },
  };

  return (
    configs[index] || { colSpan: "col-span-3", rowSpan: "", height: "h-56" }
  );
};
const getMobileGridConfig = (index: number) => {
  const configs: { [key: number]: GridConfig } = {
    0: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    1: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    2: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    3: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    4: { colSpan: "col-span-12", rowSpan: "", height: "h-56" },
    5: { colSpan: "col-span-12", rowSpan: "row-span-2", height: "h-56" },
    6: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    7: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    8: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
    9: { colSpan: "col-span-6", rowSpan: "", height: "h-56" },
  };

  return (
    configs[index] || { colSpan: "col-span-3", rowSpan: "", height: "h-56" }
  );
};

const banners = [
  {
    id: 1,
    url: "https://www.hofmann.uz/storage/category/POnZaC5fxr7edJwWwymHfvyIXxRo7xnCqyuuLcqN.webp",
  },
  {
    id: 2,
    url: "https://www.hofmann.uz/storage/category/oM4Wvl8Z5X7qi1ZJYwfSV1aQSxIWADimxLHFIOy4.webp",
  },
  {
    id: 3,
    url: "https://www.hofmann.uz/storage/category/411U2Sb30RT6Lnx496pYPlpB5uUTCnHsRkrQMTxe.webp",
  },
  {
    id: 4,
    url: "https://www.hofmann.uz/storage/category/LmtOs703fD5JuV8Xg7Gcyoj2n1dHjhkaLOTCNdM8.webp",
  },
  {
    id: 5,
    url: "https://www.hofmann.uz/storage/category/dlIvXqinC4gmdk8wGdNlzBFhr9Yx8XhHofanB0tS.webp",
  },
  {
    id: 6,
    url: "https://www.hofmann.uz/storage/category/dlIvXqinC4gmdk8wGdNlzBFhr9Yx8XhHofanB0tS.webp",
  },
  {
    id: 7,
    url: "https://www.hofmann.uz/storage/category/LmtOs703fD5JuV8Xg7Gcyoj2n1dHjhkaLOTCNdM8.webp",
  },
  {
    id: 8,
    url: "https://www.hofmann.uz/storage/category/411U2Sb30RT6Lnx496pYPlpB5uUTCnHsRkrQMTxe.webp",
  },
  {
    id: 9,
    url: "https://www.hofmann.uz/storage/category/oM4Wvl8Z5X7qi1ZJYwfSV1aQSxIWADimxLHFIOy4.webp",
  },
  {
    id: 10,
    url: "https://www.hofmann.uz/storage/category/POnZaC5fxr7edJwWwymHfvyIXxRo7xnCqyuuLcqN.webp",
  },
];

export default function CategoryGrid() {
  return (
    <>
      <div className="container mx-auto mb-20 hidden md:block">
        <div
          className="grid grid-cols-4 gap-5 overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "auto",
          }}
        >
          {banners.map((banner, index) => {
            const { colSpan, rowSpan, height } = getGridConfig(index);

            return (
              <Link
                key={index}
                href={`${banner.url}`}
                className={`${colSpan} ${rowSpan} ${height} w-full ${index} bg-cover bg-center  relative cursor-pointer h-56`}
                style={{ backgroundImage: `url(${banner.url})` }}
              >
                <div className="absolute inset-0 bg-black/25 bg-opacity-30"></div>
                <div className="relative h-full w-full p-7 flex flex-col justify-end">
                  <p className="text-white font-medium">техника</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
       <div className="container mx-auto px-5 md:px-0 mb-20  md:hidden">
        <div
          className="grid grid-cols-6 gap-5  overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "auto",
          }}
        >
          {banners.map((banner, index) => {
            const { colSpan, height } = getMobileGridConfig(index);

            return (
              <div
                key={index}
                className={` ${colSpan}  ${height}   w-full bg-cover bg-center  relative cursor-pointer`}
                style={{ backgroundImage: `url(${banner.url})` }}
              >
                <div className="absolute inset-0 bg-black/25 bg-opacity-30"></div>
                <div className="relative h-full w-full p-7 flex flex-col justify-end">
                  <p className="text-white font-medium">техника</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> 
    </>
  );
}
