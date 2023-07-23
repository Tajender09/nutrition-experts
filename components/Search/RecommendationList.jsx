import RecommendationCard from "@/components/Search/RecommendationCard";
import { categoryItems } from "@/components/Header/Menu";

const RecommendationList = () => {
  return (
    <div className="mt-5 py-5 border-y-2 bg-white">
      <p className="ml-4 text-sm font-bold">ITEMS WE RECOMMEND</p>
      <div className="w-full flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {categoryItems.map((item) => {
          return (
            <RecommendationCard
              key={item.id}
              image={item.image}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationList;
