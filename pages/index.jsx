import { useState } from "react";
import getCountries from "../lib/api/getCountries";
import { filterByName, filterByRegion, getUniqRegions } from "../lib/utils";
// import components
import Header from "../components/Header";
import CountryList from "../components/CountryList";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";

export default function Home({ countries, regions }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const handleTextSearch = (term) =>
    setFilteredCountries(filterByName(countries, term));
  const handleRegionSearch = (term) =>
    setFilteredCountries(filterByRegion(countries, term));
  return (
    <>
      <Filters
        handleTextSearch={handleTextSearch}
        handleRegionSearch={handleRegionSearch}
        regions={regions}
      />
      <CountryList countries={filteredCountries} />
    </>
  );
}

export async function getStaticProps(context) {
  const countries = await getCountries();
  const regions = getUniqRegions(countries);
  return {
    props: {
      countries,
      regions,
    },
  };
}
