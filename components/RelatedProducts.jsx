import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <h4 className=" text-xl font-bold mb-5">You Might Also Like</h4>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        <ProductCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/dymatize_0f5131032c.jpg" />
        <ProductCard link="../optimum.jpg" />
        <ProductCard link="../MuscleBlaze.jpg" />
        <ProductCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1688062802/51vRHIuIG5L._SL1500_-removebg-preview_khhwc4.png" />
        <ProductCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1688050458/81dBb89hyBL._SL1500_-removebg-preview_ilkevi.png" />
        <ProductCard link="https://res.cloudinary.com/dybxysxcl/image/upload/v1688062801/ashvagandha-removebg-preview_isoed9.png" />
      </Carousel>
      ;
    </div>
  );
};

export default RelatedProducts;
