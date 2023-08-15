import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[80px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <div className="bg-dim_grey">
          <img
            src="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/dymatize_0f5131032c.jpg"
            alt="Front"
            className="saturate-150 brightness-105 mix-blend-multiply"
          />
        </div>
        <div className="bg-dim_grey">
          <img
            src="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/medium_dymatize3_57560b1566.jpg"
            alt="Nutrition"
            className="saturate-150 brightness-105 mix-blend-multiply"
          />
        </div>
        <div className="bg-dim_grey">
          <img
            src="https://res.cloudinary.com/dybxysxcl/image/upload/v1685195287/dymatize1_c2e19b24e9.jpg"
            alt="Back"
            className="saturate-150 brightness-105 mix-blend-multiply"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
