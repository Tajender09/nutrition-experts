import { BiSearch } from "react-icons/bi";
import RecommendationList from "@/components/Search/RecommendationList";
const Search = () => {
  const trendingSearches = ["optimum nutrition", "dymatize", "muscleblaze"];

  return (
    <div className="h-screen bg-dim_grey">
      <div className="py-5 bg-white">
        <p className="ml-4 text-sm font-bold">
          TRENDING SEARCHES ON <span className="text-primary">N</span>X
        </p>
        <ul className="px-4">
          {trendingSearches.map((search, index) => (
            <li className="flex items-center gap-2 mt-4" key={index}>
              <BiSearch size={18} />
              <p>{search}</p>
            </li>
          ))}
        </ul>
      </div>
      <RecommendationList />
    </div>
  );
};

export default Search;
