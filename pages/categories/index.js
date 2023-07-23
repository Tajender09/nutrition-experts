import Wrapper from "@/components/Wrapper";
import CategoryTile from "@/components/CategoryTile";
import { categoryItems } from "@/components/Header/Menu";

const Categories = () => {
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-evenly items-center lg:hidden">
        {categoryItems.map((item) => {
          return <CategoryTile categoryData={item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Categories;
