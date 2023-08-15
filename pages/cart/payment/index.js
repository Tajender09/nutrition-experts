import CartPageSkeleton from "@/components/Cart/CartPage";

const Payment = () => {
  const paymentMethods = [
    {
      id: 1,
      key: "pod",
      text: "Pay on Delivery (Cash/UPI)",
      isDisabled: false,
    },
    {
      id: 2,
      key: "upi",
      text: "UPI",
      isDisabled: true,
    },
    {
      id: 3,
      key: "debit",
      text: "Debit Card",
      isDisabled: true,
    },
  ];

  return (
    <CartPageSkeleton>
      <div className="gap-2 bg-white my-4 md:rounded-md md:w-3/4 md:mx-auto lg:w-11/12">
        <p className="font-semibold p-4 pb-2">Choose Payment Mode</p>
        <ul className="my-2">
          {paymentMethods.map((mode) => (
            <li
              key={mode.id}
              className="border-t-2 flex items-center p-4 gap-1 relative"
            >
              <input
                type="radio"
                id={mode.key}
                value={mode.key}
                name="mode"
                className="accent-primary"
                disabled={mode.isDisabled}
              />
              <label
                className={`${
                  mode.isDisabled ? "text-disabled" : "text-black"
                } text-sm`}
                htmlFor={mode.key}
              >
                {mode.text}
              </label>
              {mode.isDisabled ? (
                <span className="absolute right-4 text-xs border-[1px] font-semibold border-primary text-primary rounded-2xl px-2 py-1">
                  Coming soon
                </span>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>
    </CartPageSkeleton>
  );
};

export default Payment;
