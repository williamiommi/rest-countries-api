import { fetcher } from '../lib/utils';
// import components
import Header from "../components/Header";
import CountryList from "../components/CountryList";

export default function Home({ countries }) {
  return (
    <div>
      <Header />
      <CountryList countries={countries} />
    </div>
  );
}

export async function getStaticProps(context) {
  const countries = await fetcher("https://restcountries.eu/rest/v2/all");
  return {
    props: {
      countries
    }, // will be passed to the page component as props
  }
}
