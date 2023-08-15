import Wrapper from "@/components/Wrapper";
import AddressCard from "@/components/Address/AddressCard";
import AddressModal from "@/components/Modal/AddressModal";
import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";

const SavedAddress = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <>
      <Wrapper>
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
          <AddressCard />
          <AddressCard />
        </div>
      </Wrapper>
      {showAddressModal ? (
        <AddressModal setShowModal={setShowAddressModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default SavedAddress;
