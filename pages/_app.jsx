import "../styles/globals.css";
import DefaultLayout from "../components/DefaultLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
