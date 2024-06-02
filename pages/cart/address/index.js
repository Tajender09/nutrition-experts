import AddressCard from "@/components/Address/AddressCard";
import CartPageSkeleton from "@/components/Cart/CartPage";
import { useGetUserInfo } from "@/utils/customHooks";
import { useEffect, useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { useRouter } from "next/router";

const Address = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const { userInfo, isLoggedIn } = useGetUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn || !userInfo?.cartItems?.length) {
      router.push("/cart/checkout");
    }
  }, []);

  return (
    <CartPageSkeleton
      showAddressModal={showAddressModal}
      setShowAddressModal={setShowAddressModal}
    >
      <div className="flex items-center justify-between gap-2 bg-white py-2 px-4 mt-3 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
        <h2 className="font-semibold hidden xs:block">
          Select Delivery Address
        </h2>
        <button
          onClick={() => setShowAddressModal(true)}
          className="border-[1px] mx-auto xs:mx-0 text-center text-sm rounded-md font-medium border-black py-2 px-4 flex items-center gap-1"
        >
          <PiPlusBold />
          Add New Address
        </button>
      </div>
      <div className="my-4">
        {!userInfo?.savedAddresses?.length ? (
          <div className="bg-white w-full rounded-md text-center py-4 md:w-3/4 md:mx-auto lg:w-11/12">
            No address found
          </div>
        ) : (
          userInfo?.savedAddresses?.map((address) => (
            <AddressCard isInCart={true} addressData={address} key={address} />
          ))
        )}
      </div>
    </CartPageSkeleton>
  );
};

export default Address;
