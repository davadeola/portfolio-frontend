import Head from "next/head";
import App from "next/app";
import "../styles/globals.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { Navbar, Footer } from "../components";
import { motion, AnimatePresence } from "framer-motion";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps, router }) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <>
          <Navbar />
          <GlobalContext.Provider value={global.attributes}>
            <Component {...pageProps} key={router.route} />
          </GlobalContext.Provider>

          <Footer />
        </>
      </AnimatePresence>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const globalRes = await fetchAPI("/projects", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
