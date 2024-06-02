import { amount, getDiscountPercent, getSizeString } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { getProductPrice } from "../Cart/CartSummaryUtility";

const OrderCard = ({ orderDetails, setShowOrdersModal, orderIndex }) => {
  const { productMrp, productPrice } = getProductPrice(orderDetails);

  return (
    <div className="border-[1px] border-[#AEB1BD] mb-4 rounded-md h-44">
      <div className="p-2 flex items-center justify-between border-b-[1px] rounded-t-md bg-dim_grey md:px-10">
        <p className="text-sm font-semibold">
          Ordered on 28<sup>th</sup> Sep 2022
        </p>
        <button
          onClick={() =>
            setShowOrdersModal({
              show: true,
              productId: orderDetails?.productId,
              productIndex: orderIndex,
            })
          }
          className="text-sm font-medium text-gray-500 underline"
        >
          Order Details
        </button>
      </div>
      <div className="p-2 flex items-center h-4/5">
        <Link
          href={`/product/${orderDetails?.slug}`}
          className="w-1/2 xs:w-2/12 flex items-center justify-center sm:h-4/5 rounded-l-md sm:rounded-t-md sm:rounded-b-none h-full"
        >
          <Image
            src={orderDetails?.thumbnail?.url}
            alt="Whey Protein"
            width={500}
            height={500}
            className="h-full object-contain saturate-150 brightness-105 mix-blend-multiply"
          />
        </Link>
        <div className="ml-4 h-full flex flex-col justify-evenly sm:p-2">
          <p className="text-xs font-semibold sm:text-sm">
            {orderDetails?.name}
          </p>
          <div className="text-xs font-semibold">
            <span className="bg-dim_grey py-1 px-2">
              Size:{" "}
              {getSizeString(
                orderDetails?.selectedSize,
                orderDetails?.sizeUnit
              )}
            </span>
            <span className="bg-dim_grey py-1 px-2 ml-2">
              Qty: {orderDetails?.quantity}
            </span>
            <span className="bg-dim_grey py-1 px-2 ml-2">
              Flavour: {orderDetails?.selectedFlavour}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="font-semibold">{amount(productPrice)}</h2>
            <h3 className="text-sm line-through font-semibold text-gray-500">
              {amount(productMrp)}
            </h3>
            <p className="text-xs font-semibold text-primary">
              {getDiscountPercent(productPrice, productMrp)}% OFF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
