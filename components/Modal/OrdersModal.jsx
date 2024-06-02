import { LiaTimesSolid } from "react-icons/lia";
import { useEffect } from "react";
import { getProductPrice } from "../Cart/CartSummaryUtility";
import { amount } from "@/utils/helper";

const OrdersModal = ({ orderDetails, showOrdersModal, setShowModal }) => {
  const orderData = orderDetails?.find(
    (order, index) =>
      order?.productId === showOrdersModal?.productId &&
      index === showOrdersModal?.productIndex
  );

  const { productMrp, productPrice } = getProductPrice(orderData);

  const handleCloseModal = (e) => {
    if (e.target.id === "backdrop") setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      onClick={(e) => handleCloseModal(e)}
      id="backdrop"
      className="fixed inset-0 bg-black bg-opacity-25 z-10 flex justify-center items-center"
    >
      <div className="w-full h-full md:h-max md:w-3/4 xl:w-1/2 bg-white rounded-md relative">
        <div className="flex justify-between items-center p-4 relative after:absolute after:h-[1px] after:w-full after:bg-dim_grey after:left-0 after:top-full">
          <span className="font-bold">Order Details</span>
          <button
            onClick={() =>
              setShowModal({
                show: false,
                productId: 0,
                productIndex: -1,
              })
            }
          >
            <LiaTimesSolid size={25} />
          </button>
        </div>
        <div className="flex items-center justify-between my-2 mx-4 py-2 rounded-md xs:border-0">
          <p className="text-sm font-semibold mr-3">
            Ordered on 28<sup>th</sup> Sep 2022
          </p>
          <p className="text-sm text-white bg-green-800 font-bold inline text-center px-5 py-1 rounded-full ">
            Delivered
          </p>
        </div>
        <div className="flex items-start justify-between mx-4 mb-4 p-4 rounded-md border-[1px] flex-col sm:flex-row">
          <div className="w-full sm:w-1/4">
            <h4 className="text-sm font-bold mb-1">Shipping Address</h4>
            <p className="text-sm w-1/3 sm:w-full">
              {`${orderData?.address?.address}, ${orderData?.address?.city}, ${orderData?.address?.state} - ${orderData?.address?.pincode}`}
            </p>
          </div>
          <div className="w-full mt-4 sm:mt-0 sm:w-1/4">
            <h4 className="text-sm font-bold mb-1">Payment Method</h4>
            <p className="text-sm">{orderData?.paymentMethod}</p>
          </div>
          <div className="w-full mt-4 sm:mt-0 sm:w-1/4">
            <h4 className="text-sm font-bold mb-1">Price Details</h4>
            <div className="text-sm flex items-center justify-between">
              <p>Total MRP</p>
              <p>{amount(productMrp)}</p>
            </div>
            <div className="text-sm flex items-center justify-between">
              <p>Discount on MRP</p>
              <p className="text-[#03a685]">
                - {amount(productMrp - productPrice)}
              </p>
            </div>
            {/* <div className="text-sm flex items-center justify-between">
              <p>Delivery Fee</p>
              <p>₹50</p>
            </div> */}
            <div className="text-sm flex items-center justify-between">
              <p className="font-semibold">Total Amount</p>
              <p className="font-semibold">{amount(productPrice)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersModal;
