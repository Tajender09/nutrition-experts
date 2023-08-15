import { TbTruckDelivery } from "react-icons/tb";
import CartCard from "@/components/Cart/CartCard";

import CartPageSkeleton from "@/components/Cart/CartPage";

const Cart = () => {
  return (
    <>
      <CartPageSkeleton>
        <div className="flex items-center gap-2 bg-white py-2 px-4 mt-3 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
          <TbTruckDelivery size={20} />
          <p className="text-xs font-medium">
            Delivery by <span className="font-semibold">26 Jul 2023</span>
          </p>
        </div>
        <div className="my-4">
          <CartCard image="/optimum.jpg" />
          <CartCard image="/MuscleBlaze.jpg" />
        </div>
      </CartPageSkeleton>
      {/* When cart is filled */}
    </>
  );
};

export default Cart;
