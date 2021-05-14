import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/solid";

import getCountriesAlpha3Code from "../../lib/api/getCountriesAlpha3Code";
import getCountryDetail from "../../lib/api/getCountryDetail";

import Button from "../../components/Button";
import DetailLabel from "../../components/DetailLabel";

export default function Detail({ country, error }) {
  const router = useRouter();

  if (router.isFallback)
    return (
      <div className="mx-auto text-center p-10 desktop:container">
        Loading...
      </div>
    );
  return (
    <div className="mx-auto px-4 desktop:container desktop:px-0">
      <div className="py-20">
        <Button
          icon={<ArrowLeftIcon className="w-5 pr-2" />}
          anchorClass='w-28 shadow-simple'
          linkName="Back"
          linkUrl="/"
        />
      </div>

      <div className="flex flex-col tablet:flex-row">
        <div className="flex justify-center w-full tablet:w-2/4 tablet:justify-start">
          <Image
            src={country.flag}
            alt={country.name}
            width={600}
            height={400}
            layout="intrinsic"
            className="block border-gray-dark border-1"
          />
        </div>
        <div className="w-full tablet:w-2/4 tablet:pl-10">
          <p className="pt-10 pb-5 font-extrabold text-h1">{country.name}</p>
          <div className="flex flex-col pb-10 desktop:flex-row">
            <div className="pb-8 desktop:pb-0 desktop:pr-40">
              {country.nativeName && (
                <DetailLabel label="Native Name: " value={country.nativeName} />
              )}
              {country.population && (
                <DetailLabel
                  label="Population: "
                  value={country.population.toLocaleString()}
                />
              )}
              {country.region && (
                <DetailLabel label="Region: " value={country.region} />
              )}
              {country.subregion && (
                <DetailLabel label="Sub Region: " value={country.subregion} />
              )}
              {country.capital && (
                <DetailLabel label="Capital: " value={country.capital} />
              )}
            </div>
            <div>
              {country.topLevelDomain && (
                <DetailLabel
                  label="Top Level Domain: "
                  value={country.topLevelDomain.join(", ")}
                />
              )}
              {country.currencies && (
                <DetailLabel
                  label="Currencies: "
                  value={country.currencies.join(", ")}
                />
              )}
              {country.languages && (
                <DetailLabel
                  label="Languages: "
                  value={country.languages.join(", ")}
                />
              )}
            </div>
          </div>
          {country.borders && (
            <div className="flex flex-col desktop:flex-row desktop:items-baseline">
              <p className="font-semibold text-base w-1/4 pb-5 desktop:pb-0">Border Countries</p>
              <ul className='flex flex-row flex-wrap w-3/4'>
                {country.borders.map((border) => (
                  <li>
                    <Button
                      key={border.name}
                      linkName={border.name}
                      anchorClass='shadow-simple mr-4 mb-4'
                      linkUrl={`/detail/${border.alpha3Code}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const country = await getCountryDetail(params.alpha3Code);
  if (!country) {
    return {
      notFound: true,
    };
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
