import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { amount, capitalize, getDiscountPercent } from "@/utils/helper";
import { editApiData, fetchDataFromApi } from "@/utils/api";
import { useGetUserInfo } from "@/utils/customHooks";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/userSlice";
import { notifyError } from "@/utils/notify";

const CartCard = ({ productInfo }) => {
  const { userInfo } = useGetUserInfo();
  const dispatch = useDispatch();
  const quantityArray = [1, 2, 3, 4, 5];

  const removeFromCart = async () => {
    let filteredItems = [];
    let cartProducts = userInfo?.cartProducts || [];
    if (productInfo?.hasFlavour) {
      filteredItems = userInfo?.cartItems?.filter((item) => {
        return !(
          item?.id === productInfo?.productId &&
          item?.selectedSize === +productInfo?.currentSize?.size &&
          item?.selectedFlavour === productInfo?.currentSize?.flavour
        );
      });
    } else {
      filteredItems = userInfo?.cartItems?.filter((item) => {
        return !(
          item?.id === productInfo?.productId &&
          item?.selectedSize === +productInfo?.currentSize?.size
        );
      });
    }
    if (!filteredItems?.some((item) => item?.productId === productInfo?.id)) {
      cartProducts = cartProducts?.filter(
        (product) => product?.id !== productInfo?.id
      );
    }

    const cartItemsCall = await editApiData({
      endpoint: `/api/users/${userInfo.id}`,
      body: {
        cartItems: filteredItems,
        cartProducts,
      },
      token: userInfo.token,
    });

    const getUpdatedCart = await fetchDataFromApi(
      `/api/users/${cartItemsCall?.data?.id}?populate[cartProducts][populate]=thumbnail`,
      userInfo.token
    );

    dispatch(
      addToCart({
        cartItems: getUpdatedCart?.cartItems,
        cartProducts: getUpdatedCart?.cartProducts,
      })
    );
  };

  const quantityHandler = async (e) => {
    const cartItems = [...userInfo.cartItems];
    const indexToUpdate = productInfo?.hasFlavour
      ? userInfo?.cartItems?.findIndex(
          (item) =>
            item?.productId === productInfo?.id &&
            item?.selectedSize === +productInfo?.currentSize?.size &&
            item?.selectedFlavour === productInfo?.currentSize?.flavour
        )
      : userInfo?.cartItems?.findIndex(
          (item) =>
            item?.productId === productInfo?.id &&
            item?.selectedSize === +productInfo?.currentSize?.size
        );
    const updatedObj = {
      ...cartItems[indexToUpdate],
      quantity: +e.target.value,
    };
    cartItems.splice(indexToUpdate, 1, updatedObj);

    try {
      const cartItemsCall = await editApiData({
        endpoint: `/api/users/${userInfo.id}`,
        body: {
          cartItems,
        },
        token: userInfo.token,
      });
      const updatedCartCall = await fetchDataFromApi(
        `/api/users/${cartItemsCall?.data?.id}?populate[cartProducts][populate]=thumbnail&populate[wishlist][populate]=thumbnail`,
        userInfo.token
      );
      dispatch(
        addToCart({
          cartItems: updatedCartCall?.cartItems,
          cartProducts: updatedCartCall?.cartProducts,
        })
      );
    } catch {
      notifyError();
    }
  };
  console.log({ productInfo });

  return (
    <div className="relative bg-white mb-4 p-2 xs:p-0 border-[1px] h-36 rounded-md md:w-3/4 md:mx-auto lg:w-11/12 flex items-center">
      <Link
        href={`/product/${productInfo?.slug}`}
        className="w-1/4 xs:p-2 rounded-l-md h-full bg-white"
      >
        <Image
          src={productInfo?.thumbnail?.url}
          alt={productInfo?.name}
          width={500}
          height={500}
          className="h-full object-contain saturate-150 brightness-105 mix-blend-multiply"
        />
      </Link>
      <div className="w-3/4 md:ml-0 h-full flex flex-col justify-evenly md:p-3">
        <p className="text-xs font-semibold mt-2 md:text-sm md:w-11/12">
          {productInfo?.brand}
        </p>
        <p className="text-xs w-11/12 truncate sm:overflow-visible md:text-sm">
          {productInfo?.name}
        </p>
        <div className="flex items-center mt-2">
          <div className="text-xs font-semibold flex">
            <span className="bg-dim_grey py-1 px-2">{`${
              productInfo?.currentSize?.size
            } ${capitalize(productInfo?.sizeUnit)}`}</span>
            {productInfo?.hasFlavour ? (
              <span className="bg-dim_grey py-1 px-2 ml-2">
                {capitalize(productInfo?.currentSize?.flavour)}
              </span>
            ) : (
              <></>
            )}
            <div className="bg-dim_grey py-1 px-2 ml-2 flex items-center">
              <span>Qty:</span>
              <select
                onChange={(e) => quantityHandler(e)}
                className="bg-dim_grey outline-none"
                value={productInfo?.currentSize?.quantity}
              >
                {quantityArray.map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <HiOutlineTrash
            className="text-disabled ml-2 hidden sm:block hover:text-gray-600 hover:cursor-pointer"
            size={18}
            onClick={removeFromCart}
          />
          <IoMdClose
            size={18}
            className="absolute right-2 top-2 sm:hidden"
            onClick={removeFromCart}
          />
        </div>
        <div className="flex items-baseline gap-2 my-3">
          <h2 className="font-semibold">
            {amount(
              productInfo?.currentSize?.price *
                productInfo?.currentSize?.quantity
            )}
          </h2>
          <h3 className="text-sm line-through text-gray-500">
            {amount(
              productInfo?.currentSize?.mrp * productInfo?.currentSize?.quantity
            )}
          </h3>
          <p className="text-xs font-semibold text-primary">
            {getDiscountPercent(
              productInfo?.currentSize?.price,
              productInfo?.currentSize?.mrp
            )}
            % OFF
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
