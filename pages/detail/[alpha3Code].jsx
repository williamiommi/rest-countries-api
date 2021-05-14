import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/solid";

import getCountriesAlpha3Code from "../../lib/api/getCountriesAlpha3Code";
import getCountryDetail from "../../lib/api/getCountryDetail";

import Button from "../../components/Button";
import Label from "../../components/Label";

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
          anchorClass="w-28 shadow-simple"
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
              <Label
                testId="nativeName"
                label="Native Name: "
                value={country.nativeName}
                isDetail
              />
              <Label
                testId="population"
                label="Population: "
                value={country.population?.toLocaleString()}
                isDetail
              />
              <Label
                testId="region"
                label="Region: "
                value={country.region}
                isDetail
              />
              <Label
                testId="subRegion"
                label="Sub Region: "
                value={country.subregion}
                isDetail
              />
              <Label
                testId="capital"
                label="Capital: "
                value={country.capital}
                isDetail
              />
            </div>
            <div>
              <Label
                testId="topLevelDomain"
                label="Top Level Domain: "
                value={country.topLevelDomain?.join(", ")}
                isDetail
              />
              <Label
                testId="currencies"
                label="Currencies: "
                value={country.currencies.join(", ")}
                isDetail
              />
              <Label
                label="languages"
                label="Languages: "
                value={country.languages.join(", ")}
                isDetail
              />
            </div>
          </div>
          {country.borders && (
            <div className="flex flex-col desktop:flex-row desktop:items-baseline">
              <p className="font-semibold text-base w-1/4 pb-5 desktop:pb-0">
                Border Countries:
              </p>
              <ul className="flex flex-row flex-wrap w-3/4">
                {country.borders.map((border) => (
                  <li>
                    <Button
                      key={border.name}
                      linkName={border.name}
                      anchorClass="shadow-simple mr-4 mb-4"
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
