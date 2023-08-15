import Wrapper from "@/components/Wrapper";
import WishlistCard from "@/components/Wishlist/WishlistCard";

const Wishlist = () => {
  return (
    <Wrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 gap-y-4 mt-5 mb-20 sm:gap-5">
      <WishlistCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/dymatize_0f5131032c.jpg" />
      <WishlistCard link="/optimum.jpg" />
      <WishlistCard link="/MuscleBlaze.jpg" />
      <WishlistCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1688062802/51vRHIuIG5L._SL1500_-removebg-preview_khhwc4.png" />
      <WishlistCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1688050458/81dBb89hyBL._SL1500_-removebg-preview_ilkevi.png" />
      <WishlistCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1688062801/ashvagandha-removebg-preview_isoed9.png" />
    </Wrapper>
  );
};

export default Wishlist;
