import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NavCatalog() {
  const [selectedGroup, setSelectedGroup] = useState<{
    id: number;
    name: string;
  }>();
/*   const [subGroupList, setSubGroupList] = useState();
 */  const [isGroupHovered, setGroupHovered] = useState(false);

  const cat = [
    {
      id: 1,
      name: "Климатическая техника",
    },
    {
      id: 2,
      name: "Сантехника",
    },
    {
      id: 3,
      name: "Техника для дома",
    },
    {
      id: 4,
      name: "Техника для кухни",
    },
    {
      id: 5,
      name: "Телевизоры",
    },
    {
      id: 6,
      name: "Отдельно стоящая техника",
    },
  ];

  useEffect(() => {
    if (!isGroupHovered) {
      setSelectedGroup({
        id: 0,
        name: "",
      });
    }
  }, [isGroupHovered]);

  return (
    <div className="hidden md:block transform-none flex-grow  max-h-[420px]">
      <div className="h-fit">
        <div className="flex justify-between container mx-auto">
          <div
            onMouseLeave={() => setGroupHovered(false)}
            className="flex gap-5"
          >
            <div className=" flex flex-col   py-3 text-white text-[15px]">
              {cat.map((el) => (
                <p
                  key={el.id}
                  onMouseEnter={() => {
                    setGroupHovered(true);
                    setSelectedGroup(el);
                  }}
                  className={`cursor-pointer font-bold py-[15px] ${
                    selectedGroup?.id == el.id && "underline underline-offset-4"
                  }`}
                >
                  {el.name}
                </p>
              ))}
            </div>
            <div className="">
              {isGroupHovered && (
                <div className=" overflow-y-auto min-w-[200px] max-w-[350px]  py-3 max-h-[320px] w-full flex flex-col text-[15px] ">
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Сантехника
                  </p>
                  <p className="cursor-pointer font-bold py-[15px]">
                    Техника для дома
                  </p>
                </div>
              )}
            </div>
          </div>
          {isGroupHovered && (
            <div>
              <Image
                src={"/blog.webp"}
                width={420}
                height={500}
                className="w-full"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
