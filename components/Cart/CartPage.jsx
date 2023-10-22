import { FiTag, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import CartSummary from "@/components/Cart/CartSummary";
import { useRouter } from "next/router";
import CouponModal from "../Modal/CouponModal";
import { useState } from "react";
import AddressModal from "../Modal/AddressModal";
import Link from "next/link";
import { useGetUserInfo } from "@/utils/customHooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPageSkeleton = ({
  showAddressModal,
  setShowAddressModal,
  selectedAddress,
  children,
}) => {
  const router = useRouter();
  const [showCouponModal, setShowCouponModal] = useState(false);
  const { userInfo } = useGetUserInfo();
  const addressToSend = {
    id: Math.random(),
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
    type: "home",
  };
  return (
    <>
      <div className="min-h-screen pt-1 pb-20 bg-dim_grey">
        {/* When cart is empty */}
        {!userInfo?.cartItems?.length ? (
          <div className="flex flex-col items-center">
            <Image
              src="/empty.svg"
              alt="Empty Cart"
              height={50}
              width={50}
              className="w-3/4 sm:w-2/5 lg:w-1/4 object-contain mx-auto"
            />
            <h2 className="font-semibold">Your cart is empty!</h2>
            <p className="text-sm">
              Let's start adding some products to the cart.
            </p>
            <Link
              href="/wishlist"
              className="text-primary border-2 border-primary p-2 font-bold mt-5 inline-block"
            >
              ADD ITEMS FROM WISHLIST
            </Link>
            {/* <RecommendationList /> */}
          </div>
        ) : (
          <></>
        )}
        {/* When cart is empty */}

        {/* When cart is filled */}
        {userInfo?.cartItems?.length ? (
          <div className="flex flex-col lg:flex-row lg:max-w-[1280px] lg:px-3 lg:mt-4 mx-auto">
            <div className="lg:w-2/3">{children}</div>
            <div className="lg:w-1/3 lg:mt-3">
              {router.pathname === "/cart/checkout" ? (
                <div
                  onClick={() => setShowCouponModal(true)}
                  className="cursor-pointer bg-white py-2 px-4 flex justify-between items-center mb-4 md:rounded-md md:w-3/4 md:mx-auto"
                >
                  <p className="flex items-center gap-3">
                    <FiTag size={20} />
                    <span className="text-sm font-semibold">Apply Coupon</span>
                  </p>
                  <FiChevronRight size={25} />
                </div>
              ) : (
                <></>
              )}
              <CartSummary selectedAddress={selectedAddress} />
            </div>
          </div>
        ) : (
          <></>
        )}

        <ToastContainer />
      </div>
      {showCouponModal ? (
        <CouponModal setShowModal={setShowCouponModal} />
      ) : (
        <></>
      )}
      {showAddressModal ? (
        <AddressModal
          addressToSend={addressToSend}
          userInfo={userInfo}
          setShowModal={setShowAddressModal}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CartPageSkeleton;
