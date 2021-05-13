import getCountriesAlpha3Code from "../../lib/api/getCountriesAlpha3Code";
import getCountryDetail from "../../lib/api/getCountryDetail";

export default function Detail({ country }) {
  return <div>{country.nativeName}</div>;
}

export async function getStaticProps({ params }) {
  const country = await getCountryDetail(params.alpha3Code);
  return {
    props: {
      country,
    },
  };
}

export async function getStaticPaths() {
  const countries = await getCountriesAlpha3Code();
  const paths = countries.map(({ alpha3Code }) => ({ params: { alpha3Code } }));
  return {
    paths,
    fallback: false,
  };
}
