import Wrapper from "@/components/Wrapper";
import WishlistCard from "@/components/Wishlist/WishlistCard";
import { useGetUserInfo } from "@/utils/customHooks";
import { editApiData, fetchDataFromApi } from "@/utils/api";
import { removeFromWishlist } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import AddFromWishlistModal from "@/components/Modal/AddFromWishlist";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { userInfo, isLoggedIn } = useGetUserInfo();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  if (!isLoggedIn) {
    return;
  }

  const removeItemFromWishlist = async (productId) => {
    let wishlist = userInfo.wishlist.filter(
      (product) => product.id !== productId
    );
    try {
      const response = await editApiData({
        endpoint: `/api/users/${userInfo.id}`,
        body: { wishlist },
        token: userInfo.token,
      });
      const data = await fetchDataFromApi(
        `/api/users/${response?.data?.id}?populate[wishlist][populate]=thumbnail`,
        userInfo.token
      );
      dispatch(removeFromWishlist(data?.wishlist));
    } catch (err) {
      console.error(err);
    }
  };

  const addItemToCart = (productInfo) => {
    setProductInfo(productInfo);
    setShowModal(true);
  };

  return (
    <>
      <Wrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 gap-y-4 mt-5 mb-20 sm:gap-5">
        {userInfo?.wishlist?.map((item) => {
          return (
            <WishlistCard
              key={item.id}
              productInfo={item}
              removeItemFromWishlist={removeItemFromWishlist}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </Wrapper>
      <ToastContainer />
      {showModal ? (
        <AddFromWishlistModal
          productInfo={productInfo}
          setShowModal={setShowModal}
          removeItemFromWishlist={removeItemFromWishlist}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Wishlist;
