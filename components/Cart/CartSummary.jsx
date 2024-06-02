import { useRouter } from "next/router";
import { buttonDetails } from "@/components/BottomNavigation";
import { useGetUserInfo } from "@/utils/customHooks";
import { amount } from "@/utils/helper";
import { notifyError } from "@/utils/notify";
import { useSelector } from "react-redux";
import { getCartData } from "./CartSummaryUtility";

const CartSummary = () => {
  const router = useRouter();
  const { userInfo } = useGetUserInfo();
  const cartItems = userInfo?.cartItems || [];
  const cartProducts = userInfo?.cartProducts || [];
  const selectedAddress = useSelector(
    ({ orderSlice }) => orderSlice.selectedAddress
  );

  const { totalDiscount, totalPrice } = getCartData(cartItems, cartProducts);
  const cartSummaryBtnHandler = (buttonDetails) => {
    let currentOrder = {};

    if (router.pathname === "/cart/checkout") {
      currentOrder = { ...currentOrder, cartItems, cartProducts };
      router.push(buttonDetails[router.pathname]?.href);
    } else if (router.pathname === "/cart/address") {
      if (selectedAddress === 0 || !userInfo?.savedAddresses?.length) {
        notifyError("Please select an address to proceed.");
        return;
      } else {
        const address = userInfo?.savedAddresses?.find(
          (address) => address?.id === selectedAddress
        );
        currentOrder = { ...currentOrder, cartItems, cartProducts, address };
      }
      router.push(buttonDetails[router.pathname]?.href);
    } else {
      console.log({ currentOrder: { ...currentOrder } });
    }
  };

  return (
    <div className="bg-white py-2 p-4 md:rounded-md md:w-3/4 md:mx-auto">
      <h6 className="text-sm font-semibold border-b-2 pb-2">PRICE DETAILS</h6>
      <div className="my-2">
        <div className="flex justify-between items-center text-sm">
          <p>Total MRP</p>
          <p>{amount(totalPrice)}</p>
        </div>
        <div className="flex justify-between items-center text-sm my-2">
          <p>Discount on MRP</p>
          <p className="text-[#03a685]">- {amount(totalDiscount)}</p>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p>Delivery Fee</p>
          <p>₹50</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 pt-2">
        <h6 className="text-sm font-bold">Total Amount</h6>
        <h6 className="text-sm font-bold">
          {amount(totalPrice - totalDiscount + 50)}
        </h6>
      </div>
      <button
        onClick={() => cartSummaryBtnHandler(buttonDetails)}
        className="hidden w-full my-4 mx-auto bg-primary text-white text-center text-sm font-semibold p-2 lg:block"
      >
        {buttonDetails[router.pathname]?.btnText}
      </button>
    </div>
  );
};

export default CartSummary;
