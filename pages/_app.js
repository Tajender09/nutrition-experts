import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { useState, useEffect } from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  let persistor = persistStore(store);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMobileMenu]);

  return (
    <main className={montserrat.className}>
      <Head>
        <title>Nutrition Experts</title>
        <meta description="Get the best deals on whey proteins and other health supplements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/nx_favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header setShowMobileMenu={setShowMobileMenu} />
          <Component
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
            {...pageProps}
          />
          <BottomNavigation />
        </PersistGate>
      </Provider>
    </main>
  );
}
