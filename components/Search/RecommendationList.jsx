import RecommendationCard from "@/components/Search/RecommendationCard";
import { useGetUserInfo } from "@/utils/customHooks";

const RecommendationList = () => {
  const { userInfo } = useGetUserInfo();

  return userInfo?.wishlist?.length ? (
    <div className="mt-5 py-5 border-y-2 bg-white">
      <p className="ml-4 text-sm font-bold">ITEMS FROM YOUR WISHLIST</p>
      <div className="w-full flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {userInfo.wishlist.map((item) => {
          return <RecommendationCard key={item.id} itemData={item} />;
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default RecommendationList;
