import Link from "next/link";
import AddressCard from "@/components/Address/AddressCard";
import CartPageSkeleton from "@/components/Cart/CartPage";

const Address = () => {
  return (
    <CartPageSkeleton>
      <div className="flex items-center justify-between gap-2 bg-white py-2 px-4 mt-3 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
        <h2 className="font-semibold hidden md:block">
          Select Delivery Address
        </h2>
        <Link
          href="/cart/address/add"
          className="border-[1px] mx-auto md:mx-0 text-center text-sm rounded-md font-medium border-black py-2 px-4"
        >
          Add New Address
        </Link>
      </div>
      <div className="my-4">
        <AddressCard />
        <AddressCard />
      </div>
    </CartPageSkeleton>
  );
};

export default Address;
