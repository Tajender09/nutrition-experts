import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { capitalize } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedAddress } from "@/store/orderSlice";

const AddressCard = ({
  addressData,
  isInCart = false,
  editAddress = () => {},
  removeAddress = () => {},
}) => {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(
    ({ orderSlice }) => orderSlice.selectedAddress
  );

  return (
    <>
      <label
        htmlFor={addressData.id}
        className="bg-white flex items-center mt-4 p-2 border-[1px] h-36 rounded-t-md md:w-3/4 md:mx-auto lg:w-11/12"
      >
        <div className="h-full w-full flex flex-col justify-evenly ml-5 md:p-3">
          <p className="relative text-sm font-semibold mt-2 md:w-11/12">
            {addressData.name}
            {isInCart ? (
              <input
                type="radio"
                id={addressData.id}
                value={selectedAddress}
                checked={addressData.id === selectedAddress}
                onChange={() => dispatch(setSelectedAddress(addressData.id))}
                name="address"
                className="absolute -left-5 accent-primary top-1"
              />
            ) : (
              <></>
            )}
            <span className="absolute text-xs right-4 md:right-0 border-[1px] font-semibold border-primary text-primary rounded-2xl px-2 py-1">
              {capitalize(addressData.type)}
            </span>
          </p>
          <p className="text-xs md:text-sm md:w-11/12">{addressData.address}</p>
          <p className="text-xs md:text-sm md:w-11/12">{`${addressData.city}, ${addressData.state}`}</p>
          <p className="text-xs md:text-sm md:w-11/12">{addressData.pincode}</p>
          <p className="text-xs md:text-sm md:w-11/12">
            Mobile: <span className="font-semibold">{addressData.mobile}</span>
          </p>
        </div>
      </label>
      {!isInCart ? (
        <div className="border-[1px] py-2 border-t-0 rounded-b-md md:w-3/4 md:mx-auto lg:w-11/12">
          <button
            onClick={() => editAddress(addressData.id)}
            className="w-1/2 inline-flex justify-center items-center gap-1 border-r-[1px]"
          >
            <BiSolidEdit /> Edit
          </button>
          <button
            onClick={() => removeAddress(addressData.id)}
            className="w-1/2 inline-flex justify-center items-center gap-1"
          >
            <AiFillDelete />
            Remove
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddressCard;
