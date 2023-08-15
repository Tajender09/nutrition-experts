import { useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const CouponModal = ({ setShowModal }) => {
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
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10 flex justify-center items-center"
    >
      <div className="w-full h-full md:h-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-md relative">
        <div className="flex justify-between items-center p-4 relative after:absolute after:h-[1px] after:w-full after:bg-dim_grey after:left-0 after:top-full">
          <span className="font-semibold">Apply Coupon</span>
          <button onClick={() => setShowModal(false)}>
            <LiaTimesSolid size={25} />
          </button>
        </div>
        <div className="flex items-center justify-between border-2 p-3 rounded-md mt-4 mx-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="outline-none w-11/12"
          />
          <button className="text-sm leading-none text-primary font-semibold tracking-wider">
            CHECK
          </button>
        </div>

        <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] absolute w-full bottom-0 left-0 py-2 px-4 flex items-center justify-between z-10 bg-white">
          <div>
            <p className="text-xs font-semibold text-gray-700">My savings:</p>
            <p className="font-semibold">₹ 100</p>
          </div>
          <button className="bg-primary text-white font-semibold py-3 px-12">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
