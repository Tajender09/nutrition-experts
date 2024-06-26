import CartPageSkeleton from "@/components/Cart/CartPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useGetUserInfo } from "@/utils/customHooks";
import { setPaymentMethod } from "@/store/orderSlice";

const Payment = () => {
  const router = useRouter();
  const selectedAddress = useSelector(
    ({ orderSlice }) => orderSlice.selectedAddress
  );
  const { userInfo } = useGetUserInfo();
  const dispatch = useDispatch();

  const paymentMethods = [
    {
      id: 1,
      key: "pod",
      text: "Pay on Delivery (Cash/UPI)",
      isDisabled: false,
    },
    {
      id: 2,
      key: "upi",
      text: "UPI",
      isDisabled: true,
    },
    {
      id: 3,
      key: "debit",
      text: "Debit/Credit Card",
      isDisabled: true,
    },
  ];

  useEffect(() => {
    if (selectedAddress === 0 || !userInfo?.savedAddresses?.length) {
      router.push("/cart/address");
    }
  }, []);

  return (
    <CartPageSkeleton>
      <div className="gap-2 bg-white my-4 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
        <p className="font-semibold p-4 pb-2">Choose Payment Mode</p>
        <ul className="my-2">
          {paymentMethods.map((mode) => (
            <li
              key={mode.id}
              className="border-t-2 flex items-center p-4 gap-1 relative"
            >
              <input
                type="radio"
                id={mode.key}
                value={mode.key}
                name="mode"
                className="accent-primary"
                disabled={mode.isDisabled}
              />
              <label
                className={`${
                  mode.isDisabled ? "text-disabled" : "text-black"
                } text-sm`}
                htmlFor={mode.key}
              >
                {mode.text}
              </label>
              {mode.isDisabled ? (
                <span className="absolute right-4 text-xs border-[1px] font-semibold border-primary text-primary rounded-2xl px-2 py-1">
                  Coming soon
                </span>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>
    </CartPageSkeleton>
  );
};

export default Payment;
