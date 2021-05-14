import CountryBox from "../components/CountryBox";

export default function CountryList({ countries }) {
  if (!countries) return null;
  return (
    <div
      data-testid="country-list"
      className="mx-auto px-5 pb-10 grid grid-cols-1 gap-x-14 gap-y-10 auto-rows-auto tablet:grid-cols-2 tablet-lg:grid-cols-3 desktop:container desktop:px-0 desktop:grid-cols-4"
    >
      {countries.map((country) => (
        <CountryBox key={country.alpha3Code} {...country} />
      ))}
    </div>
  );
}
