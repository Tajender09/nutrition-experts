import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { amount, getDiscountPercent } from "@/utils/helper";

const WishlistCard = ({
  productInfo,
  removeItemFromWishlist = () => {},
  addItemToCart = () => {},
}) => {
  const addToCartHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log({ productInfo });
    addItemToCart(productInfo);
  };

  const removeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeItemFromWishlist(productInfo?.id);
  };

  return (
    <Link
      href={`/product/${productInfo?.slug}`}
      className="relative flex items-center p-2 xs:p-0 border-[1px] border-[#AEB1BD] rounded-md h-36 sm:flex-col sm:h-[21rem]"
    >
      <span
        onClick={(e) => removeHandler(e)}
        className="absolute top-2 right-2 p-1 bg-white shadow rounded-full hidden sm:block"
      >
        <IoClose className="text-lg" />
      </span>
      <div className="w-1/2 xs:w-1/4 flex items-center justify-center xs:bg-dim_grey sm:w-full sm:h-3/5 rounded-l-md sm:rounded-t-md sm:rounded-b-none h-full">
        <Image
          src={productInfo?.thumbnail?.url}
          alt="Whey Protein"
          width={500}
          height={500}
          className="h-full sm:h-4/5 object-contain saturate-150 brightness-105 mix-blend-multiply"
        />
      </div>
      <div className="ml-4 h-full sm:h-2/5 flex flex-col justify-evenly w-full sm:p-2">
        <p className="text-xs font-semibold sm:truncate sm:text-sm sm:w-11/12">
          {productInfo?.name}
        </p>
        <div className="flex items-baseline gap-2">
          <h2 className="font-semibold">{amount(productInfo?.price)}</h2>
          <h3 className="text-sm line-through font-semibold text-gray-500">
            {amount(productInfo?.mrp)}
          </h3>
          <p className="text-xs font-semibold text-primary">
            {getDiscountPercent(productInfo?.price, productInfo?.mrp)}% Off
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => addToCartHandler(e)}
            className="flex items-center w-max border-primary border-2 py-2 px-4 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white sm:w-11/12 sm:justify-center"
          >
            <FiShoppingCart className="mr-2" />
            <span className="text-sm font-bold">Add to Cart</span>
          </button>
          <button
            onClick={(e) => removeHandler(e)}
            className="bg-primary h-full flex items-center justify-center px-3 rounded-md text-white z-10 sm:hidden"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default WishlistCard;
