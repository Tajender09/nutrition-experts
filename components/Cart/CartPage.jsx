import { FiTag, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import RecommendationList from "@/components/Search/RecommendationList";
import CartSummary from "@/components/Cart/CartSummary";
import { useRouter } from "next/router";
import CouponModal from "../Modal/CouponModal";
import { useState } from "react";
import AddressModal from "../Modal/AddressModal";

const CartPageSkeleton = ({
  showAddressModal,
  setShowAddressModal,
  children,
}) => {
  const router = useRouter();
  const [showCouponModal, setShowCouponModal] = useState(false);
  return (
    <>
      <div className="lg:h-screen pt-1 pb-20 bg-dim_grey">
        {/* When cart is empty */}
        {false && (
          <>
            <Image
              src="/empty.svg"
              alt="Empty Cart"
              height={50}
              width={50}
              className="w-3/4 sm:w-2/5 lg:w-1/4 object-contain mx-auto"
            />
            <h2 className="text-center font-semibold">Your cart is empty!</h2>
            <p className="text-center text-sm">
              Let's start adding some products to the cart.
            </p>
            <RecommendationList />
          </>
        )}
        {/* When cart is empty */}

        {/* When cart is filled */}
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
            <CartSummary />
          </div>
        </div>
      </div>
      {showCouponModal ? (
        <CouponModal setShowModal={setShowCouponModal} />
      ) : (
        <></>
      )}
      {showAddressModal ? (
        <AddressModal setShowModal={setShowAddressModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default CartPageSkeleton;
