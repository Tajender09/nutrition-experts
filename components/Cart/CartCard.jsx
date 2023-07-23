import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";

const CartCard = () => {
  return (
    <div className="bg-white flex items-center mt-4 p-2 xs:p-0 border-[1px] h-36 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
      <div className="w-1/4 xs:p-2 rounded-l-md h-full">
        <Image
          src="https://res.cloudinary.com/dybxysxcl/image/upload/v1688062803/611PHgj6q4L._SL1500_-removebg-preview_xjj0zj.png"
          alt="Whey Protein"
          width="50"
          height="50"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="ml-4 md:ml-0 h-full flex flex-col justify-evenly md:p-3">
        <p className="text-xs font-semibold mt-2 md:text-sm md:w-11/12">
          Optimum Nutrition
        </p>
        <p className="text-xs md:text-sm md:w-11/12">
          Optimum Nutrition (ON) Gold Standard 100% Whey Protein...
        </p>
        <div className="flex items-center mt-2">
          <div className="text-xs font-semibold">
            <span className="bg-dim_grey py-1 px-2">Size: 2 Kg</span>
            <span className="bg-dim_grey py-1 px-2 ml-2">Qty: 1</span>
          </div>
          <HiOutlineTrash className="text-disabled ml-2" size={18} />
        </div>
        <div className="flex items-baseline gap-2 my-3">
          <h2 className="font-semibold">₹1,149</h2>
          <h3 className="text-sm line-through text-gray-500">₹1700</h3>
          <p className="text-xs font-semibold text-primary">( 21% OFF )</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
