import getCountries from "../lib/api/getCountries";
import { getUniqRegions } from "../lib/utils";
// import components
import CountryList from "../components/CountryList";
import Filters from "../components/Filters";
import useFilterState from "../lib/hooks/useFilterState";

export default function Home({ countries, regions }) {
  const {
    selectedRegion,
    filteredCountries,
    filteredRegions,
    setSearchTerm,
    setSelectedRegion,
  } = useFilterState(countries, regions);

  return (
    <>
      <Filters
        selectedRegion={selectedRegion}
        regions={filteredRegions}
        handleRegionSearch={setSelectedRegion}
        handleTextSearch={setSearchTerm}
      />
      <CountryList countries={filteredCountries} />
    </>
  );
}

export async function getStaticProps() {
  const countries = await getCountries();
  const regions = getUniqRegions(countries);
  return {
    props: {
      countries,
      regions,
    },
  };
}
