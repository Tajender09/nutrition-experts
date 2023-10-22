import { TbTruckDelivery } from "react-icons/tb";
import CartCard from "@/components/Cart/CartCard";

import CartPageSkeleton from "@/components/Cart/CartPage";
import { useGetUserInfo } from "@/utils/customHooks";
import { formatDate } from "@/utils/helper";

const Cart = () => {
  const { userInfo } = useGetUserInfo();
  const today = new Date();
  let deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 2);
  deliveryDate = formatDate(deliveryDate.toLocaleDateString());

  return (
    <>
      <CartPageSkeleton>
        <div className="flex items-center gap-2 bg-white py-2 px-4 mt-3 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
          <TbTruckDelivery size={20} />
          <p className="text-xs font-medium">
            Delivery by <span className="font-semibold">{deliveryDate}</span>
          </p>
        </div>
        <div className="my-4">
          {userInfo?.cartItems?.map((cartItem, index) => {
            let currentProduct =
              userInfo?.cartProducts?.find(
                (product) => product?.id === cartItem?.productId
              ) || {};
            let currentSize = currentProduct?.hasFlavour
              ? currentProduct?.sizes?.find(
                  (variant) =>
                    +variant?.size === cartItem?.selectedSize &&
                    variant?.flavour === cartItem?.selectedFlavour
                )
              : currentProduct?.sizes?.find(
                  (variant) => +variant?.size === cartItem?.selectedSize
                );
            currentSize = { ...currentSize, quantity: cartItem?.quantity };
            currentProduct = { ...currentProduct, currentSize };
            return <CartCard key={index} productInfo={currentProduct} />;
          })}
        </div>
      </CartPageSkeleton>
      {/* When cart is filled */}
    </>
  );
};

export default Cart;
