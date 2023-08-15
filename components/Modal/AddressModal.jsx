import { LiaTimesSolid } from "react-icons/lia";
import { useState, useEffect } from "react";

const AddressModal = ({ setShowModal }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "backdrop") setShowModal(false);
  };
  const activeClass = "text-primary border-primary";
  const inActiveClass = "text-[#454545] border-[#454545]";
  const [addressType, setAddressType] = useState("home");
  const addressTypeOptions = [
    {
      id: 1,
      type: "home",
    },
    {
      id: 2,
      type: "work",
    },
    {
      id: 3,
      type: "other",
    },
  ];

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      onClick={(e) => handleCloseModal(e)}
      id="backdrop"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10 flex justify-center items-center"
    >
      <div className="w-full h-full md:h-max md:w-1/2 lg:w-1/3 bg-white rounded-md relative">
        <div className="flex justify-between items-center p-4 relative after:absolute after:h-[1px] after:w-full after:bg-dim_grey after:left-0 after:top-full">
          <span className="font-semibold">Add New Address</span>
          <button onClick={() => setShowModal(false)}>
            <LiaTimesSolid size={25} />
          </button>
        </div>
        <form>
          <input
            type="text"
            placeholder="Enter Full Name"
            maxLength={30}
            className="block w-11/12 mx-auto border-[1px] border-[#d4d5d9] text-[#282c3f] rounded-md outline-none p-3 text-sm my-4"
            required
          />
          <input
            type="tel"
            placeholder="Enter Mobile No"
            maxLength={10}
            className="block w-11/12 mx-auto border-[1px] border-[#d4d5d9] text-[#282c3f] rounded-md outline-none p-3 text-sm my-4"
            required
          />
          <input
            type="tel"
            placeholder="Enter Pin Code"
            maxLength={6}
            className="block w-11/12 mx-auto border-[1px] border-[#d4d5d9] text-[#282c3f] rounded-md outline-none p-3 text-sm my-4"
            required
          />
          <textarea
            placeholder="Address (House No, Building, Street)"
            className="block w-11/12 mx-auto border-[1px] border-[#d4d5d9] text-[#282c3f] rounded-md outline-none p-3 text-sm my-4"
            rows={5}
            required
          />
          <input
            type="text"
            placeholder="Locality / Town"
            className="block w-11/12 mx-auto border-[1px] border-[#d4d5d9] text-[#282c3f] rounded-md outline-none p-3 text-sm my-4"
            required
          />
          <span className="w-11/12 mx-auto flex gap-2 items-center">
            {addressTypeOptions.map((option) => (
              <>
                <input
                  type="radio"
                  value={option.type}
                  id={option.type}
                  name="type"
                  className="hidden"
                  onChange={() => setAddressType(option.type)}
                />
                <label
                  htmlFor={option.type}
                  className={`${
                    addressType === option.type ? activeClass : inActiveClass
                  } font-semibold text-xs cursor-pointer border-[1px] py-1 px-3 rounded-xl capitalize`}
                >
                  {option.type}
                </label>
              </>
            ))}
          </span>
        </form>
        <div>
          <button
            type="submit"
            className="bg-primary text-white font-semibold py-3 px-12 w-11/12 block mx-auto my-5"
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
