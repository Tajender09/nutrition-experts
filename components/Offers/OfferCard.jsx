import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const OfferCard = () => {
  return (
    <div className="flex items-center mt-4 p-2 xs:p-0 border-[1px] border-[#AEB1BD] rounded-md h-36 md:flex-col md:h-full md:w-[48%] lg:w-[32%]">
      <div className="w-1/2 xs:w-1/4 xs:p-2 xs:bg-dim_grey md:w-full md:h-36 rounded-l-md md:rounded-t-md md:rounded-b-none h-full">
        <Image
          src="https://res.cloudinary.com/dybxysxcl/image/upload/v1688062803/611PHgj6q4L._SL1500_-removebg-preview_xjj0zj.png"
          alt="Whey Protein"
          width="50"
          height="50"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="ml-4 h-full flex flex-col justify-evenly md:p-3">
        <p className="text-xs font-semibold md:text-sm md:w-11/12">
          Optimum Nutrition (ON) Gold Standard 100% Whey Protein...
        </p>
        <div className="flex items-baseline gap-2 my-3">
          <h2 className="font-semibold">₹1,149</h2>
          <h3 className="text-sm line-through text-gray-500">₹1700</h3>
          <p className="text-xs font-semibold text-primary">( 21% OFF )</p>
        </div>
        <button className="flex items-center w-max border-primary border-2 py-2 px-4 rounded-sm font-semibold bg-white text-primary hover:bg-primary hover:text-white md:w-11/12 md:justify-center">
          <FiShoppingCart className="mr-2" />
          <span className="text-xs">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
