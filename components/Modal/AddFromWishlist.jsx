import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import Image from "next/image";
import { amount, getDiscountPercent, capitalize } from "@/utils/helper";
import { editApiData, fetchDataFromApi } from "@/utils/api";
import { useGetUserInfo } from "@/utils/customHooks";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "@/store/userSlice";
import { notifySuccess } from "@/utils/notify";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AddFromWishlistModal = ({ productInfo, setShowModal }) => {
  const { userInfo } = useGetUserInfo();
  const dispatch = useDispatch();
  const [productPrice, setProductPrice] = useState(productInfo?.price);
  const [actualPrice, setActualPrice] = useState(productInfo?.mrp);
  const [selectedSize, setSelectedSize] = useState(productInfo?.size);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [showFlavourError, setShowFlavourError] = useState(false);
  const cartProducts = userInfo?.cartProducts || [];
  const cartItems = userInfo?.cartItems || [];
  const wishlist = userInfo?.wishlist || [];

  const uniqueSizes =
    productInfo?.sizes
      ?.map((item) => +item?.size)
      ?.filter((value, index, self) => self.indexOf(value) === index) || [];

  const handleCloseModal = (e) => {
    if (e.target.id === "backdrop") setShowModal(false);
  };

  const handleAddToCart = async () => {
    if (productInfo?.hasFlavour && !selectedFlavour) {
      setShowFlavourError(true);
    } else {
      const cartItemsCall = await editApiData({
        endpoint: `/api/users/${userInfo.id}`,
        body: {
          cartItems: [
            ...cartItems,
            {
              productId: productInfo?.id,
              selectedFlavour,
              selectedSize,
              quantity: 1,
            },
          ],
          cartProducts: [
            ...cartProducts,
            {
              id: productInfo?.id,
            },
          ],
          wishlist: wishlist?.filter((item) => item.id !== productInfo?.id),
        },
        token: userInfo.token,
      });

      const updatedCart = await fetchDataFromApi(
        `/api/users/${cartItemsCall?.data?.id}?populate[cartProducts][populate]=thumbnail&populate[wishlist][populate]=thumbnail`,
        userInfo.token
      );
      dispatch(
        addToCart({
          cartItems: updatedCart?.cartItems,
          cartProducts: updatedCart?.cartProducts,
        })
      );
      dispatch(addToWishlist(updatedCart?.wishlist));
      notifySuccess("Added to Cart Successfully");
      setShowModal(false);
    }
  };

  useEffect(() => {
    const updatedPrice = +productInfo?.sizes?.find(
      (item) => +item?.size === selectedSize
    )?.price;
    setProductPrice(updatedPrice);

    const updatedActualPrice = +productInfo?.sizes?.find(
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
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      onClick={(e) => handleCloseModal(e)}
      id="backdrop"
      className="fixed inset-0 bg-black bg-opacity-25 z-10 flex justify-center items-center"
    >
      <div className="w-full h-max xs:w-11/12 md:w-1/2 lg:w-1/3 bg-white rounded-md relative">
        <div className="flex justify-between items-start p-4 relative after:absolute after:h-[1px] after:w-full after:bg-dim_grey after:left-0 after:top-full">
          <div className="flex items-center gap-4">
            <div className="bg-dim_grey p-2">
              <Image
                width={60}
                height={80}
                src={productInfo?.thumbnail?.url}
                alt={productInfo?.name}
                className="saturate-150 brightness-105 mix-blend-multiply"
              />
            </div>
            <div>
              <h1>{productInfo?.name}</h1>
              <div className="flex items-baseline gap-2">
                <h2 className="font-semibold">{amount(productPrice)}</h2>
                <h3 className="text-sm line-through font-semibold text-gray-500">
                  {amount(actualPrice)}
                </h3>
                <p className="text-xs font-semibold text-primary">
                  {getDiscountPercent(productPrice, actualPrice)}% Off
                </p>
              </div>
            </div>
          </div>
          <button onClick={() => setShowModal(false)}>
            <LiaTimesSolid size={25} />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-md font-semibold mb-2">Select Size</h2>
          <div className="grid grid-cols-3 gap-2">
            {uniqueSizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
                  selectedSize === size ? "border-black" : ""
                }`}
              >
                {`${size} ${capitalize(productInfo?.sizeUnit)}`}
              </div>
            ))}
          </div>
          {productInfo?.hasFlavour ? (
            <>
              <div className="mt-5 mb-2">
                <h2 className="text-md font-semibold">Select Flavour</h2>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {productInfo?.sizes?.map((sizeObj) => {
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
                <p className="ml-4 text-red-600 text-sm mt-1">
                  Flavour selection is required
                </p>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="p-4">
          {userInfo?.cartItems?.some(
            (userData) =>
              userData?.productId === productInfo?.id &&
              userData?.selectedSize === selectedSize &&
              userData?.selectedFlavour === selectedFlavour
          ) ? (
            <Link
              href="/cart/checkout"
              className="bg-primary text-white flex items-center justify-center gap-4 w-full p-2 rounded-md font-semibold"
            >
              Go to Cart
              <HiOutlineArrowNarrowRight />
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white w-full p-2 rounded-md font-semibold"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFromWishlistModal;
