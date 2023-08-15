import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const WishlistCard = ({ link }) => {
  const eventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("hi");
  };
  return (
    <Link
      href={`/product/1`}
      className="flex items-center p-2 xs:p-0 border-[1px] border-[#AEB1BD] rounded-md h-36 sm:flex-col sm:h-[21rem]"
    >
      <div className="w-1/2 xs:w-1/4 flex items-center justify-center xs:bg-dim_grey sm:w-full sm:h-3/5 rounded-l-md sm:rounded-t-md sm:rounded-b-none h-full">
        <Image
          src={link}
          alt="Whey Protein"
          width={500}
          height={500}
          className="h-full sm:h-4/5 object-contain saturate-150 brightness-105 mix-blend-multiply"
        />
      </div>
      <div className="ml-4 h-full sm:h-2/5 flex flex-col justify-evenly sm:p-2">
        <p className="text-xs font-semibold sm:text-sm sm:w-11/12">
          Optimum Nutrition (ON) Gold Standard 100% Whey Protein...
        </p>
        <div className="flex items-baseline gap-2">
          <h2 className="font-semibold">₹1,149</h2>
          <h3 className="text-sm line-through font-semibold text-gray-500">
            ₹1700
          </h3>
          <p className="text-xs font-semibold text-primary">{`( 21% OFF )`}</p>
        </div>
        <button
          onClick={(e) => eventHandler(e)}
          className="flex items-center w-max border-primary border-2 py-2 px-4 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white sm:w-11/12 sm:justify-center"
        >
          <FiShoppingCart className="mr-2" />
          <span className="text-sm font-bold">Add to Cart</span>
        </button>
      </div>
    </Link>
  );
};

export default WishlistCard;
