import Wrapper from "@/components/Wrapper";
import CategoryTile from "@/components/CategoryTile";
import { fetchDataFromApi } from "@/utils/api";

const Categories = ({ categories = {} }) => {
  const sortedCategories = categories?.data.sort(function (a, b) {
    return a.id - b.id;
  });
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-evenly items-center lg:hidden">
        {sortedCategories.map((item) => {
          return <CategoryTile categoryData={item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Categories;

export async function getServerSideProps() {
  const categories = await fetchDataFromApi("/api/categories?populate=*");

  return {
    props: {
      categories,
    },
  };
}
