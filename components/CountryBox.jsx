import Link from "next/link";
import Image from "next/image";

export default function CountryBox({
  alpha3Code,
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <Link href={`/detail/${alpha3Code}`}>
      <a className="flex flex-col shadow-lg bg-white rounded-md dark:bg-blue-dark">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            data-testid="image"
            src={flag}
            alt={name}
            layout="fill"
            className="object-cover rounded-t-md"
          />
        </div>
        <section className="p-4 pb-8">
          <p data-testid="name" className="mb-4 font-extrabold text-h3">
            {name}
          </p>
          {population > 0 && (
            <p data-testid="population">
              <label className="font-semibold">Population: </label>
              {population.toLocaleString()}
            </p>
          )}
          {region && (
            <p data-testid="region">
              <label className="font-semibold">Region: </label>
              {region}
            </p>
          )}
          {capital && (
            <p data-testid="capital">
              <label className="font-semibold">Capital: </label>
              {capital}
            </p>
          )}
        </section>
      </a>
    </Link>
  );
}
