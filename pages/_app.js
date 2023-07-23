import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <main className={montserrat.className}>
      <Head>
        <title>Nutrition Experts</title>
        <meta description="Get the best deals on whey proteins and other health supplements" />

        <link rel="shortcut icon" href="/nx_favicon.png" />
      </Head>
      <Header setShowMobileMenu={setShowMobileMenu} />
      <Component
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        {...pageProps}
      />
      <BottomNavigation />
    </main>
  );
}
