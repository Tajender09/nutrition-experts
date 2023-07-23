import Wrapper from "@/components/Wrapper";
import OfferCard from "@/components/Offers/OfferCard";

const Offers = () => {
  return (
    <Wrapper className="flex flex-col md:flex-row md:flex-wrap md:gap-4">
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
    </Wrapper>
  );
};

export default Offers;
