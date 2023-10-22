import Wrapper from "@/components/Wrapper";
import ProductCarousel from "@/components/ProductDetails/ProductCarousel";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";
import { editApiData, fetchDataFromApi } from "@/utils/api";
import { amount, capitalize, getDiscountPercent } from "@/utils/helper";
import { useState, useEffect } from "react";
import { useGetUserInfo } from "@/utils/customHooks";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "@/store/userSlice";
import { notifySuccess } from "@/utils/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/router";

const ProductDetails = ({ product, products }) => {
  const productDetails = product?.data?.[0]?.attributes || {};
  const router = useRouter();
  const uniqueSizes =
    productDetails?.sizes
      ?.map((item) => +item?.size)
      ?.filter((value, index, self) => self.indexOf(value) === index) || [];
  const { isLoggedIn, userInfo } = useGetUserInfo();
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(productDetails?.size);
  console.log({ productDetails, selectedSize, router });
  const [productPrice, setProductPrice] = useState(productDetails?.price);
  const [actualPrice, setActualPrice] = useState(productDetails?.mrp);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [showFlavourError, setShowFlavourError] = useState(false);
  // const [sizeInKg, setSizeInKg] = useState(productDetails?.sizeInKg);
  const wishlist = userInfo?.wishlist || [];
  const cartProducts = userInfo?.cartProducts || [];
  const cartItems = userInfo?.cartItems || [];

  const handleAddToCart = async () => {
    if (productDetails?.hasFlavour && !selectedFlavour) {
      setShowFlavourError(true);
    } else {
      if (isLoggedIn) {
        const cartItemsCall = await editApiData({
          endpoint: `/api/users/${userInfo.id}`,
          body: {
            cartItems: [
              ...cartItems,
              {
                productId: product?.data?.[0]?.id,
                selectedFlavour,
                selectedSize,
                quantity: 1,
              },
            ],
            cartProducts: [
              ...cartProducts,
              {
                id: product?.data?.[0]?.id,
              },
            ],
          },
          token: userInfo.token,
        });

        const updatedCart = await fetchDataFromApi(
          `/api/users/${cartItemsCall?.data?.id}?populate[cartProducts][populate]=thumbnail`,
          userInfo.token
        );
        dispatch(
          addToCart({
            cartItems: updatedCart?.cartItems,
            cartProducts: updatedCart?.cartProducts,
          })
        );
        notifySuccess("Added to Cart Successfully");
      } else alert("Please login to add to cart");
    }
  };

  const handleWishlistClick = async () => {
    if (isLoggedIn) {
      try {
        const response = await editApiData({
          endpoint: `/api/users/${userInfo.id}`,
          body: { wishlist: [...wishlist, product?.data[0]?.id] },
          token: userInfo.token,
        });
        const data = await fetchDataFromApi(
          `/api/users/${response?.data?.id}?populate[wishlist][populate]=thumbnail`,
          userInfo.token
        );
        dispatch(addToWishlist(data?.wishlist));
      } catch (err) {
        console.log(err);
      }
    } else alert("Please login to add to wishlist");
  };

  useEffect(() => {
    const updatedPrice = +productDetails?.sizes?.find(
      (item) => +item?.size === selectedSize
    )?.price;
    setProductPrice(updatedPrice);

    const updatedActualPrice = +productDetails?.sizes?.find(
      (item) => +item?.size === selectedSize
    )?.mrp;
    setActualPrice(updatedActualPrice);

    setSelectedFlavour("");
  }, [selectedSize]);

  useEffect(() => {
    if (selectedFlavour) {
      setShowFlavourError(false);
    }
  }, [selectedFlavour]);

  useEffect(() => {
    setSelectedSize(productDetails?.size);
  }, [router.asPath]);

  return (
    <div className="w-full pt-10 md:pt-20 pb-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* LEFT COLUMN START */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 relative">
            <ProductCarousel images={productDetails?.images?.data} />
          </div>
          {/* LEFT COLUMN END */}

          {/* RIGHT COLUMN END */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <h1 className="text-[30px] leading-10 font-semibold mb-2">
              {`${productDetails?.name}, ${selectedSize} ${capitalize(
                productDetails?.sizeUnit
              )}${selectedFlavour ? ", " + capitalize(selectedFlavour) : ""}`}
            </h1>
            {/* PRODUCT SUBTITLE */}
            <h4 className="text-lg font-semibold mb-5">
              {productDetails?.brand}
            </h4>
            {/* PRODUCT PRICE */}
            <p className="text-lg font-semibold flex items-center gap-3">
              Price : {amount(productPrice)}
              <span className="text-base line-through font-medium text-gray-500">
                {amount(actualPrice)}
              </span>{" "}
              <span className="text-sm text-primary">
                {getDiscountPercent(productPrice, actualPrice)}% OFF
              </span>
            </p>
            <p className="text-md font-medium text-black/[0.5] mb-10">
              incl. of taxes
            </p>
            {/* PRODUCT SIZE RANGE CHART */}
            <div className="mb-10">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-md font-semibold">Select Size</h2>

                {/* Switch size unit */}
                {/* <div className="inline-flex items-center border-primary border-[1px] rounded-md">
                  <span
                    onClick={() => setSizeInKg(true)}
                    className={`px-2 py-1 text-xs text-primary font-semibold cursor-pointer ${
                      sizeInKg ? "text-white bg-primary rounded-l-md" : ""
                    }`}
                  >
                    KG
                  </span>
                  <span
                    onClick={() => setSizeInKg(false)}
                    className={`px-2 py-1 text-xs text-primary font-semibold cursor-pointer ${
                      !sizeInKg ? "text-white bg-primary rounded-r-md" : ""
                    }`}
                  >
                    LB
                  </span>
                </div> */}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {uniqueSizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
                      selectedSize === size ? "border-black" : ""
                    }`}
                  >
                    {`${size} ${capitalize(productDetails?.sizeUnit)}`}
                  </div>
                ))}
              </div>
              {/* <p className="text-red-600 text-sm mt-1">
                Size selection is required
              </p> */}
            </div>
            {/* PRODUCT FLAVOUR CHART */}
            {productDetails?.hasFlavour ? (
              <div className="mb-10">
                <div className="mb-2">
                  <h2 className="text-md font-semibold">Select Flavour</h2>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {productDetails?.sizes?.map((sizeObj) => {
                    return +sizeObj?.size === selectedSize ? (
                      sizeObj?.stock === "true" ? (
                        <div
                          onClick={() => setSelectedFlavour(sizeObj?.flavour)}
                          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
                            selectedFlavour === sizeObj?.flavour
                              ? "border-black"
                              : ""
                          }`}
                        >
                          {capitalize(sizeObj?.flavour)}
                        </div>
                      ) : (
                        <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                          {capitalize(sizeObj?.flavour)}
                        </div>
                      )
                    ) : (
                      <></>
                    );
                  })}
                </div>
                {showFlavourError ? (
                  <p className="text-red-600 text-sm mt-1">
                    Flavour selection is required
                  </p>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            {/* ADD TO CART BUTTON START */}
            {userInfo?.cartItems?.some(
              (userData) =>
                userData?.productId === product?.data?.[0]?.id &&
                userData?.selectedSize === selectedSize &&
                userData?.selectedFlavour === selectedFlavour
            ) ? (
              <Link
                href="/cart/checkout"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 text-center hover:brightness-90"
              >
                Go to Cart
                <HiOutlineArrowNarrowRight />
              </Link>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:brightness-90"
              >
                Add to Cart
              </button>
            )}
            {/* ADD TO CART BUTTON START */}
            <button
              onClick={handleWishlistClick}
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10"
              disabled={wishlist.some(
                (wishlistProduct) => wishlistProduct.id === product?.data[0]?.id
              )}
            >
              {wishlist.some(
                (wishlistProduct) => wishlistProduct.id === product?.data[0]?.id
              )
                ? "Wishlisted"
                : "Wishlist"}
              {wishlist.some(
                (wishlistProduct) => wishlistProduct.id === product?.data[0]?.id
              ) ? (
                <IoMdHeart size={20} className="text-primary" />
              ) : (
                <IoMdHeartEmpty size={20} />
              )}
            </button>
            <div>
              <h3 className="text-lg font-bold mb-5">Product Details</h3>
              <p className="text-md mb-5">{productDetails?.description}</p>
            </div>
          </div>
          {/* RIGHT COLUMN END */}
        </div>
        <RelatedProducts products={products?.data} />
      </Wrapper>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;

export async function getServerSideProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
