import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

export const categoryItems = [
  {
    id: 1,
    name: "Sports Nutrition",
    url: "/",
    image:
      "https://res.cloudinary.com/dybxysxcl/image/upload/v1688062803/611PHgj6q4L._SL1500_-removebg-preview_xjj0zj.png",
    theme: "#DFD3A9",
  },
  {
    id: 2,
    name: "Multivitamin Supplements",
    url: "/",
    image:
      "https://res.cloudinary.com/dybxysxcl/image/upload/v1688062802/51vRHIuIG5L._SL1500_-removebg-preview_khhwc4.png",
    theme: "#CEE7E8",
  },
  {
    id: 3,
    name: "Health Food & Drinks",
    url: "/",
    image:
      "https://res.cloudinary.com/dybxysxcl/image/upload/v1688050458/81dBb89hyBL._SL1500_-removebg-preview_ilkevi.png",
    theme: "#DEB8F0",
  },
  {
    id: 4,
    name: "Ayurvedic & Herbals",
    url: "/",
    image:
      "https://res.cloudinary.com/dybxysxcl/image/upload/v1688062801/ashvagandha-removebg-preview_isoed9.png",
    theme: "#DFF79A",
  },
];

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Categories",
      subMenu: true,
    },
    {
      id: 3,
      name: "Offers",
      link: "/offers",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <ul className="h-full items-center gap-5 hidden lg:flex">
      {menuItems.map((item) => (
        <li className="cursor-pointer h-full flex items-center" key={item.id}>
          {!!item?.subMenu ? (
            <div
              className="relative h-full"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <p className="flex items-center h-full gap-1">
                <span>{item.name}</span>
                <BsChevronDown size={14} className="mt-1" />
              </p>

              {showMenu && (
                <ul className="bg-white absolute top-full left-0 min-w-[250px] px-1 text-black shadow-lg">
                  {categoryItems?.map((item) => (
                    <li
                      key={item?.id}
                      className="h-12 px-3 hover:bg-black/[0.03] flex items-center"
                    >
                      <Link href={item?.url}>{item?.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link href={item.link}>{item.name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
