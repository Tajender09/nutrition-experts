import Wrapper from "@/components/Wrapper";
import ProductCarousel from "@/components/ProductDetails/ProductCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full pt-10 md:pt-20 pb-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* LEFT COLUMN START */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 relative">
            <ProductCarousel />
          </div>
          {/* LEFT COLUMN END */}

          {/* RIGHT COLUMN END */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <h1 className="text-[30px] leading-10 sm:leading-6 font-semibold mb-2">
              Dymatize Elite 100% Whey
            </h1>

            {/* PRODUCT SUBTITLE */}
            <h4 className="text-lg font-semibold mb-5">Dymatize</h4>

            {/* PRODUCT PRICE */}
            <p className="text-lg font-semibold flex items-center gap-3">
              Price : ₹ 7000{" "}
              <span className="text-base line-through font-medium text-gray-500">
                ₹ 1700
              </span>{" "}
              <span className="text-sm text-primary">{"21% ( OFF )"}</span>
            </p>
            <p className="text-md font-medium text-black/[0.5] mb-10">
              incl. of taxes
            </p>

            {/* PRODUCT SIZE RANGE CHART */}
            <div className="mb-10">
              <div className="mb-2">
                <h2 className="text-md font-semibold">Select Size</h2>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  1 KG
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  2.5 KG
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  5 KG
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  6 KG
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  7 KG
                </div>
              </div>
              <p className="text-red-600 text-sm mt-1">
                Size selection is required
              </p>
            </div>

            {/* PRODUCT FLAVOUR CHART */}
            <div className="mb-10">
              <div className="mb-2">
                <h2 className="text-md font-semibold">Select Flavour</h2>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Rich Chocolate
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Cold Coffee
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  Red Velvet
                </div>
              </div>
              <p className="text-red-600 text-sm mt-1">
                Flavour selection is required
              </p>
            </div>

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:brightness-90">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div>
              <h3 className="text-lg font-bold mb-5">Product Details</h3>
              <p className="text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* RIGHT COLUMN END */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
