import { memo } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/solid";

import Label from "./Label";
import Button from "./Button";

function CountryDetail({ country }) {
  if (!country) return null;
  return (
    <div className="mx-auto px-4 desktop:container desktop:px-0">
      <div data-testid="back" className="py-20">
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
            data-testid="image"
            src={country.flag}
            alt={country.name}
            width={600}
            height={400}
            layout="intrinsic"
            className="block border-gray-dark border-1"
          />
        </div>
        <div className="w-full tablet:w-2/4 tablet:pl-10">
          <p data-testid="name" className="pt-10 pb-5 font-extrabold text-h1">
            {country.name}
          </p>
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
                testId="languages"
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
                  <li data-testid='country-border' key={border.name}>
                    <Button
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

export default memo(CountryDetail);
