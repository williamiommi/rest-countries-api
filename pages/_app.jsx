import { useEffect } from "react";
import "../styles/globals.css";
import { isDarkOnLoad } from "../lib/utils";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    isDarkOnLoad();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
