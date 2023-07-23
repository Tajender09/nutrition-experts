import Link from "next/link";
import { useRouter } from "next/router";
import { buttonDetails } from "@/components/BottomNavigation";

const CartSummary = () => {
  const router = useRouter();
  return (
    <div className="bg-white py-2 p-4 md:rounded-md md:w-3/4 md:mx-auto">
      <h6 className="text-sm font-semibold border-b-2 pb-2">PRICE DETAILS</h6>
      <div className="my-2">
        <div className="flex justify-between items-center text-sm">
          <p>Total MRP</p>
          <p>₹11,799</p>
        </div>
        <div className="flex justify-between items-center text-sm my-2">
          <p>Discount on MRP</p>
          <p>₹4,150</p>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p>Delivery Fee</p>
          <p>₹50</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 pt-2">
        <h6 className="text-sm font-bold">Total Amount</h6>
        <h6 className="text-sm font-bold">₹7699</h6>
      </div>
      <Link
        href={buttonDetails[router.pathname].href}
        className="hidden w-full my-4 mx-auto bg-primary text-white text-center text-sm font-semibold p-2 lg:block"
      >
        {buttonDetails[router.pathname].btnText}
      </Link>
    </div>
  );
};

export default CartSummary;
