import Wrapper from "@/components/Wrapper";
import AddressCard from "@/components/Address/AddressCard";
import AddressModal from "@/components/Modal/AddressModal";
import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { useGetUserInfo } from "@/utils/customHooks";
import { editApiData } from "@/utils/api";
import { useDispatch } from "react-redux";
import { addSavedAddress } from "@/store/userSlice";

const SavedAddress = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const { userInfo } = useGetUserInfo();
  const dispatch = useDispatch();
  const [addressToSend, setAddressToSend] = useState({});

  const addAddress = () => {
    setAddressToSend({
      id: Math.random(),
      name: "",
      mobile: "",
      pincode: "",
      address: "",
      city: "",
      state: "",
      type: "home",
    });
    setShowAddressModal(true);
  };

  const editAddress = (id) => {
    setShowAddressModal(true);
    const editableAddress = userInfo.savedAddresses.find(
      (address) => address.id === id
    );
    setAddressToSend(editableAddress);
  };

  const removeAddress = async (id) => {
    const updatedAddresses = userInfo.savedAddresses.filter(
      (address) => address.id !== id
    );
    try {
      const response = await editApiData({
        endpoint: `/api/users/${userInfo.id}`,
        body: { savedAddresses: updatedAddresses },
        token: userInfo.token,
      });
      dispatch(addSavedAddress(response.data.savedAddresses));
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-between gap-2 bg-white py-2 px-4 mt-3 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
          <h2 className="font-semibold hidden xs:block">
            Select Delivery Address
          </h2>
          <button
            onClick={addAddress}
            className="border-[1px] mx-auto xs:mx-0 text-center text-sm rounded-md font-medium border-black py-2 px-4 flex items-center gap-1"
          >
            <PiPlusBold />
            Add New Address
          </button>
        </div>
        <div className="my-4">
          {userInfo?.savedAddresses?.map((address) => (
            <AddressCard
              isInCart={false}
              addressData={address}
              removeAddress={removeAddress}
              editAddress={editAddress}
              key={address}
            />
          ))}
        </div>
      </Wrapper>
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

export default SavedAddress;
