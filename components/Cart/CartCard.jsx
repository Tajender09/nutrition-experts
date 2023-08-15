import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";

const CartCard = ({ image }) => {
  return (
    <div className="bg-white mb-4 p-2 xs:p-0 border-[1px] h-36 rounded-md md:w-3/4 md:mx-auto lg:w-11/12 flex items-center">
      <div className="w-1/4 xs:p-2 rounded-l-md h-full bg-white">
        <Image
          src={image}
          alt="Whey Protein"
          width={500}
          height={500}
          className="h-full object-contain saturate-150 brightness-105 mix-blend-multiply"
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
