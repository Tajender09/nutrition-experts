import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCarousel = ({ images = [] }) => {
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
        {images?.map((imgData) => (
          <div key={imgData?.id} className="bg-dim_grey">
            <img
              src={imgData?.attributes?.url}
              alt="Product Image"
              className="saturate-150 brightness-105 mix-blend-multiply"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
