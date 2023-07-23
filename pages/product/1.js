import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img
          src="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/dymatize_0f5131032c.jpg"
          alt="Front"
        />
        <img
          src="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/medium_dymatize3_57560b1566.jpg"
          alt="Nutrition"
        />
        <img
          src="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/dymatize1_c2e19b24e9.jpg"
          alt="Back"
        />
      </Carousel>
    </div>
  );
};

export default ProductDetails;
