import { FaRegUser } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGetUserInfo } from "@/utils/customHooks";
import { useDispatch } from "react-redux";
import { clearUserData } from "@/store/userSlice";

const UserIcon = () => {
  const [userMenuList, setUserMenuList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const { isLoggedIn } = useGetUserInfo();
  const dispatch = useDispatch();

  const logUserOut = () => {
    dispatch(clearUserData());
  };

  useEffect(() => {
    if (isLoggedIn) {
      setUserMenuList([
        {
          id: 1,
          link: "/orders",
          name: "Order History",
        },
        {
          id: 2,
          link: "/address",
          name: "Saved Addresses",
        },
        {
          id: 4,
          link: "/",
          name: "Logout",
          onClick: logUserOut,
        },
      ]);
    } else {
      setUserMenuList([
        {
          id: 1,
          link: "/login",
          name: "Login",
        },
      ]);
    }
  }, [router]);

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className="relative h-full items-center hidden lg:flex"
    >
      <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer mr-2">
        <FaRegUser className="text-[20px] md:text-[22px]" />
        <BsChevronDown />
      </div>
      {showMenu ? (
        <ul className="bg-white absolute top-full -left-3/4 min-w-[200px] px-1 text-black shadow-lg z-10">
          {userMenuList.map((item) => {
            return (
              <Link
                onClick={() => {
                  item?.onClick ? item.onClick() : () => {};
                }}
                key={item.id}
                href={item.link}
              >
                <li className="h-12 px-3 hover:bg-black/[0.03] flex items-center">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserIcon;
