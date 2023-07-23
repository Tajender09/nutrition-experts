import Link from "next/link";
import { useState } from "react";

const AddAddress = () => {
  const activeClass = "text-primary border-primary";
  const inActiveClass = "text-[#454545] border-[#454545]";
  const [addressType, setAddressType] = useState("home");

  return (
    <form className="w-full md:w-3/4 lg:w-1/3 lg:border-2 lg:px-4 lg:pb-10 md:mx-auto md:mt-4">
      <h2 className="text-center font-semibold hidden mt-4 md:block">
        Add a New Address
      </h2>
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
        <input
          type="radio"
          value="home"
          id="home"
          name="type"
          className="hidden"
          onChange={() => setAddressType("home")}
        />
        <label
          htmlFor="home"
          className={`${
            addressType === "home" ? activeClass : inActiveClass
          } font-semibold text-xs  border-[1px] py-1 px-3 rounded-xl`}
        >
          Home
        </label>
        <input
          type="radio"
          value="work"
          id="work"
          name="type"
          className="hidden"
          onChange={() => setAddressType("work")}
        />
        <label
          htmlFor="work"
          className={`${
            addressType === "work" ? activeClass : inActiveClass
          } font-semibold text-xs border-[1px] py-1 px-3 rounded-xl`}
        >
          Work
        </label>
        <input
          type="radio"
          value="other"
          id="other"
          name="type"
          className="hidden"
          onChange={() => setAddressType("other")}
        />
        <label
          htmlFor="other"
          className={`${
            addressType === "other" ? activeClass : inActiveClass
          } font-semibold text-xs border-[1px] py-1 px-3 rounded-xl`}
        >
          Other
        </label>
      </span>
      <Link
        href="/cart/address"
        className="hidden lg:block bg-primary text-white text-sm font-semibold text-center p-2 rounded w-11/12 mx-auto mt-4"
      >
        Save Address
      </Link>
    </form>
  );
};

export default AddAddress;
