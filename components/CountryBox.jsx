import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import Label from "./Label";

function CountryBox({ alpha3Code, flag, name, population, region, capital }) {
  return (
    <Link href={`/detail/${alpha3Code}`}>
      <a
        data-testid="country-box"
        className="flex flex-col shadow-lg bg-white rounded-md dark:bg-blue-dark"
      >
        <div className="aspect-w-16 aspect-h-9 shadow-sm">
          {flag && (
            <Image
              data-testid="image"
              src={flag}
              alt={name}
              layout="fill"
              className="object-cover rounded-t-md"
            />
          )}
        </div>
        <section className="p-4 pb-8">
          <h3 data-testid="name" className="mb-4 font-extrabold text-h3">
            {name}
          </h3>
          <Label
            testId="population"
            label="Population: "
            value={population?.toLocaleString()}
          />
          <Label testId="region" label="Region: " value={region} />
          <Label testId="capital" label="Capital: " value={capital} />
        </section>
      </a>
    </Link>
  );
}

export default memo(CountryBox);
