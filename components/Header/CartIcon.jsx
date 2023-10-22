import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useGetUserInfo } from "@/utils/customHooks";

const CartIcon = () => {
  const { userInfo } = useGetUserInfo();

  return (
    <Link
      href="/cart/checkout"
      className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
    >
      <FiShoppingCart className="text-[20px] md:text-[25px]" />
      <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-primary absolute top-0 left-5 md:left-7 text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] text-white">
        {userInfo?.cartItems?.length || 0}
      </span>
    </Link>
  );
};

export default CartIcon;
