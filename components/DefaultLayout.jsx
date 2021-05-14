import Head from "next/head";

import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
