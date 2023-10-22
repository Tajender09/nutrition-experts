import Wrapper from "../Wrapper";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";
import { HiMenu } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BsCreditCard2Back } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";
import { capitalize } from "@/utils/helper";
import { useGetUserInfo } from "@/utils/customHooks";
import { useDispatch } from "react-redux";
import { addUserData } from "@/store/userSlice";

const Header = ({ setShowMobileMenu }) => {
  const router = useRouter();
  const productName = router?.query?.slug?.split("-")?.[0] || "Product Details";
  const headerTitles = {
    categories: "Shop by Categories",
    wishlist: "My Wishlist",
    cart: "My Cart",
    success: "Order Placed",
    failed: "Payment Failed",
    address: "My Addresses",
    orders: "My Orders",
    product: productName,
  };
  const activeTabStyles = "text-primary bg-secondary border-primary";
  const inActiveTabStyles = "text-disabled bg-dim_grey border-disabled";
  const nonHeaderRoutes = ["/login", "/signup"];
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useGetUserInfo();

  // ---------- STATES ---------- //
  const [categories, setCategories] = useState([]);

  // ---------- FUNCTIONS ---------- //
  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories");
    setCategories(data);
  };

  const getRemainingUserData = async () => {
    const data = await fetchDataFromApi(
      `/api/users/${userInfo.id}?populate[wishlist][populate]=thumbnail&populate[cartProducts][populate]=thumbnail`,
      userInfo.token
    );

    const updatedUserInfo = {
      ...userInfo,
      previousOrders: data.previousOrders || [],
      savedAddresses: data.savedAddresses || [],
      wishlist: data?.wishlist || [],
      cartItems: data?.cartItems || [],
      cartProducts: data?.cartProducts || [],
    };
    dispatch(addUserData(updatedUserInfo));
  };

  // ---------- EFFECTS ---------- //
  useEffect(() => {
    if (isLoggedIn) {
      getRemainingUserData();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return nonHeaderRoutes.some((route) => route === router.pathname) ? (
    <></>
  ) : (
    <header
      className={`w-full ${
        router.pathname.includes("/cart") ? "h-full py-4" : "h-14 md:h-20"
      } shadow-md bg-white sticky top-0 left-0 flex items-center z-10`}
    >
      <Wrapper
        className={`flex h-full ${
          router.pathname.includes("/cart")
            ? "flex-col items-start lg:flex-row lg:items-center"
            : "flex-row justify-between items-center"
        }`}
      >
        {/* Icons for Mobiles Start */}
        {router.pathname === "/" ? (
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative lg:hidden">
            <HiMenu
              className="text-[25px]"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        ) : (
          <p className="flex items-center gap-3 lg:hidden">
            <BiArrowBack onClick={() => router.back()} size={22} />
            {router.pathname === "/search" ? (
              <input
                placeholder="Search for products or brands"
                className="outline-none"
              />
            ) : (
              <span className="font-semibold">
                {capitalize(headerTitles[router.pathname.split("/")[1]])}
              </span>
            )}
          </p>
        )}
        {/* Icons for Mobiles End */}
        {/* Company Logo */}
        <Link
          href="/"
          className={`${router.pathname !== "/" && "max-lg:hidden"}`}
        >
          <Image
            src="/logo.jpg"
            alt="Nutrition Experts"
            priority
            width="150"
            height="50"
            className="h-auto w-auto"
          />
        </Link>
        {/* Company Logo */}
        {router.pathname.includes("/cart") ? (
          <div className="flex justify-between items-center w-3/4 mt-3 mx-auto lg:m-0 lg:w-1/4 lg:justify-between lg:ml-[25%] lg:-translate-x-1/4">
            <div className="flex flex-col items-center">
              <span
                className={`${
                  router.pathname.includes("/cart")
                    ? activeTabStyles
                    : inActiveTabStyles
                } border-[1px] p-2 rounded-full`}
              >
                <FiShoppingCart size={16} />
              </span>
              <p
                className={`${
                  router.pathname.includes("/cart") ? "text-primary" : ""
                } text-xs font-medium mt-1`}
              >
                Checkout
              </p>
            </div>
            <div
              className={`${
                router.pathname.includes("/cart/address") ||
                router.pathname === "/cart/payment"
                  ? "bg-primary"
                  : "bg-disabled"
              } w-1/4 h-[1px]`}
            />
            <div className="flex flex-col items-center">
              <span
                className={`${
                  router.pathname.includes("/cart/address") ||
                  router.pathname === "/cart/payment"
                    ? activeTabStyles
                    : inActiveTabStyles
                } border-[1px] p-2 rounded-full`}
              >
                <IoLocationOutline size={16} />
              </span>
              <p
                className={`${
                  router.pathname.includes("/cart/address") ||
                  router.pathname === "/cart/payment"
                    ? "text-primary"
                    : "text-disabled"
                } text-xs font-medium mt-1`}
              >
                Address
              </p>
            </div>
            <div
              className={`${
                router.pathname === "/cart/payment"
                  ? "bg-primary"
                  : "bg-disabled"
              } w-1/4 h-[1px]`}
            />
            <div className="flex flex-col items-center">
              <span
                className={`${
                  router.pathname === "/cart/payment"
                    ? activeTabStyles
                    : inActiveTabStyles
                } border-[1px] p-2 rounded-full`}
              >
                <BsCreditCard2Back size={16} />
              </span>
              <p
                className={`${
                  router.pathname === "/cart/payment"
                    ? "text-primary"
                    : "text-disabled"
                } text-xs font-medium mt-1`}
              >
                Payment
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Menu Start */}
            <Menu categories={categories} />
            {/* Desktop Menu End */}

            {/* Search Bar Start */}
            <div className=" w-1/3 items-center p-3 bg-[#f7f7f7] rounded-xl hidden lg:flex">
              <AiOutlineSearch size={20} className="text-[#696e79] mr-2" />
              <input
                className="bg-[#f7f7f7] w-full outline-none placeholder-[#696e79]"
                type="text"
                placeholder={`Search for products, brands & more...`}
              />
            </div>
            {/* Search Bar End */}

            {/* User Icon and Cart */}
            <div className="flex items-center h-full">
              <UserIcon />
              {router.pathname === "/search" ? (
                <FaMicrophone size={20} />
              ) : (
                <CartIcon />
              )}
            </div>
            {/* User Icon and Cart */}
          </>
        )}
      </Wrapper>
    </header>
  );
};

export default Header;
