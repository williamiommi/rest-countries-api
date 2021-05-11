export default function CountryBox({
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <div className="flex flex-col">
      <div className="aspect-w-16 aspect-h-9">
        <img
          data-testid="image"
          src={flag}
          alt={name}
          className="rounded-t-md"
        />
      </div>
      <section className="p-4 pb-6 rounded-b-md shadow-lg bg-white dark:bg-blue-dark">
        <p data-testid="name" className="mb-4 font-extrabold text-h3">{name}</p>
        {population && (
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
    </div>
  );
}
