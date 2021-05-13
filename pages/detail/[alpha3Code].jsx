import { useRouter } from "next/router";

import getCountriesAlpha3Code from "../../lib/api/getCountriesAlpha3Code";
import getCountryDetail from "../../lib/api/getCountryDetail";

export default function Detail({ country, error }) {
  const router = useRouter();

  if (router.isFallback)
    return (
      <div className="mx-auto text-center p-10 desktop:container">
        Loading...
      </div>
    );
  return <div>{country.nativeName}</div>;
}

export async function getStaticProps({ params }) {
  const country = await getCountryDetail(params.alpha3Code);
  if (!country) {
    return {
      notFound: true,
    }
  }
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
    fallback: true,
  };
}
