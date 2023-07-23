import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full bg-primary bg-opacity-[33%] text-center py-2 font-medium text-sm">
        Best Deals on Health Supplements
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img
            alt="banner1"
            src="banner1.webp"
            className="aspect-[16/10] md:aspect-auto max-h-[500px]"
          />
        </div>
        <div>
          <img
            alt="banner2"
            src="banner2.jpg"
            className="aspect-[16/10] md:aspect-auto max-h-[500px]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
