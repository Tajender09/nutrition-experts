import HeroBanner from "@/components/HeroBanner";
import MobileMenu from "@/components/MobileMenu";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect } from "react";

export default function Home({
  showMobileMenu,
  setShowMobileMenu,
  products = {},
}) {
  useEffect(() => {
    return () => {
      setShowMobileMenu(false);
    };
  }, []);

  return (
    <main>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h2 className="text-2xl md:text-3xl mb-5 font-semibold leading-tight">
            Get <span className="text-primary">N</span>X exclusive combos
          </h2>
          <p className="text-md md:text-lg">
            Unlock the secret to a healthier you with our exclusive combos
            power-packed formulations designed to elevate your well-being and
            revitalize your life like never before!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard data={product} key={product?.id} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export const getServerSideProps = async () => {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
};
