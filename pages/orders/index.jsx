import Wrapper from "@/components/Wrapper";
import OrderCard from "@/components/Orders/OrderCard";
import OrdersModal from "@/components/Modal/OrdersModal";
import { useState } from "react";

const OrderHistory = () => {
  const [showOrdersModal, setShowOrdersModal] = useState(false);
  return (
    <>
      <Wrapper className="mt-5">
        <OrderCard
          setShowOrdersModal={setShowOrdersModal}
          image="/MuscleBlaze.jpg"
        />
        <OrderCard
          setShowOrdersModal={setShowOrdersModal}
          image="/optimum.jpg"
        />
      </Wrapper>
      {showOrdersModal ? (
        <OrdersModal setShowModal={setShowOrdersModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderHistory;
