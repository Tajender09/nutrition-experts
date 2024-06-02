import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearch, BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import Wrapper from "./Wrapper";
import { useRouter } from "next/router";
import { useGetUserInfo } from "@/utils/customHooks";
import { useSelector } from "react-redux";
import { notifyError } from "@/utils/notify";

export const buttonDetails = {
  "/cart/checkout": {
    href: "/cart/address",
    btnText: "Place Order",
  },
  "/cart/address": {
    href: "/cart/payment",
    btnText: "Proceed to Payment",
  },
  "/cart/address/add": {
    href: "/cart/address",
    btnText: "Save Address",
  },
  "/cart/payment": {
    href: "/cart/address",
    btnText: "Pay Now",
  },
};

const navigationAllowedRoutes = [
  "/",
  "/search",
  "/categories",
  "/wishlist",
  "/cart/checkout",
  "/cart/address",
  "/cart/payment",
];

const BottomNavigation = () => {
  const router = useRouter();
  const { userInfo } = useGetUserInfo();
  const cartItems = userInfo?.cartItems || [];
  const cartProducts = userInfo?.cartProducts || [];
  const selectedAddress = useSelector(
    ({ orderSlice }) => orderSlice.selectedAddress
  );

  const bottomNavigationList = [
    {
      id: 1,
      label: "Home",
      icon: <AiOutlineHome size={25} className="mx-auto" />,
      link: "/",
    },
    {
      id: 2,
      label: "Search",
      icon: <BiSearch size={25} className="mx-auto" />,
      link: "/search",
    },
    {
      id: 3,
      label: "Categories",
      icon: <BiCategory size={25} className="mx-auto" />,
      link: "/categories",
    },
    {
      id: 4,
      label: "Wishlist",
      icon: <FaRegHeart size={22} className="mx-auto" />,
      link: "/wishlist",
    },
  ];

  const cartSummaryBtnHandler = (buttonDetails) => {
    if (router.pathname === "/cart/checkout") {
      router.push(buttonDetails[router.pathname]?.href);
    } else if (router.pathname === "/cart/address") {
      if (selectedAddress === 0 || !userInfo?.savedAddresses?.length) {
        notifyError("Please select an address to proceed.");
        return;
      }
      router.push(buttonDetails[router.pathname]?.href);
    } else {
      const address = userInfo?.savedAddresses?.find(
        (address) => address?.id === selectedAddress
      );

      let currentOrder = cartItems?.map((item) => ({
        ...item,
        ...cartProducts?.find((product) => product?.id === item?.productId),
        cartItems,
        cartProducts,
        address,
        paymentMethod: "Pay On Delivery",
      }));
      // let currentOrder = {
      //   cartItems,
      //   cartProducts,
      //   address,
      //   paymentMethod: "Pay On Delivery",
      // };
    }
  };

  return navigationAllowedRoutes.includes(router.pathname) ? (
    router.pathname.includes("/cart") && !userInfo?.cartItems?.length ? (
      <></>
    ) : (
      //shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
      <div className="h-16 w-full flex items-center fixed bottom-0 border-b-[1px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:hidden">
        <Wrapper className="flex items-center justify-between">
          {router.pathname.includes("/cart") ? (
            <button
              onClick={() => cartSummaryBtnHandler(buttonDetails)}
              className="w-11/12 mx-auto bg-primary text-white text-sm font-semibold text-center p-2 md:w-3/4"
            >
              {buttonDetails[router.pathname].btnText}
            </button>
          ) : (
            bottomNavigationList.map((item) => {
              return (
                <Link
                  className={
                    router.pathname === item.link
                      ? "text-primary"
                      : "text-disabled"
                  }
                  key={item.id}
                  href={item.link}
                >
                  {item.icon}
                  <span className="text-xs font-semibold">{item.label}</span>
                </Link>
              );
            })
          )}
        </Wrapper>
      </div>
    )
  ) : (
    <></>
  );
};

export default BottomNavigation;
