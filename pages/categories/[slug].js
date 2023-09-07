import Wrapper from "@/components/Wrapper";
import React from "react";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";

const Category = ({ category, products }) => {
  return (
    <div className="w-full md:pt-10">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard data={product} key={product?.id} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getServerSideProps({ params: { slug } }) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );

  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][category][slug][$eq]=${slug}`
  );

  return {
    props: { category, products },
  };
}
