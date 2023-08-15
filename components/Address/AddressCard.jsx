import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const AddressCard = ({ isInCart }) => {
  return (
    <>
      <label
        htmlFor="address"
        className="bg-white flex items-center mt-4 p-2 border-[1px] h-36 rounded-t-md md:w-3/4 md:mx-auto lg:w-11/12"
      >
        <div className="h-full w-full flex flex-col justify-evenly ml-5 md:p-3">
          <p className="relative text-sm font-semibold mt-2 md:w-11/12">
            Tajender Batra
            {isInCart ? (
              <input
                type="radio"
                id="address"
                className="absolute -left-5 accent-primary top-1"
              />
            ) : (
              <></>
            )}
            <span className="absolute text-xs right-4 md:right-0 border-[1px] font-semibold border-primary text-primary rounded-2xl px-2 py-1">
              Home
            </span>
          </p>
          <p className="text-xs md:text-sm md:w-11/12">
            2 THA 25 Jawahar Nagar
          </p>
          <p className="text-xs md:text-sm md:w-11/12">Jaipur, Rajasthan</p>
          <p className="text-xs md:text-sm md:w-11/12">302004</p>
          <p className="text-xs md:text-sm md:w-11/12">
            Mobile: <span className="font-semibold">9116511522</span>
          </p>
        </div>
      </label>
      {!isInCart ? (
        <div className="border-[1px] py-2 border-t-0 rounded-b-md md:w-3/4 md:mx-auto lg:w-11/12">
          <button className="w-1/2 inline-flex justify-center items-center gap-1 border-r-[1px]">
            <BiSolidEdit /> Edit
          </button>
          <button className="w-1/2 inline-flex justify-center items-center gap-1">
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
