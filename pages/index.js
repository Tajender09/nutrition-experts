import HeroBanner from "@/components/HeroBanner";
import MobileMenu from "@/components/MobileMenu";

export default function Home({ showMobileMenu, setShowMobileMenu }) {
  return (
    <>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <HeroBanner />
    </>
  );
}
