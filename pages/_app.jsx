import { useEffect } from "react";
import Head from 'next/head';
import "../styles/globals.css";
import { isDarkOnLoad } from "../lib/utils";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    isDarkOnLoad();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
