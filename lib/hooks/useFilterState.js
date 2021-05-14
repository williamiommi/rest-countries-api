import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { filterByRegionAndName } from "../../lib/utils";

const useFilterState = (countries, regions) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filteredRegions, setFilteredRegions] = useState(regions);
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [selectedRegion, setSelectedRegion] = useState();

  useEffect(() => {
    setFilteredCountries(filterByRegionAndName(countries, selectedRegion, debouncedSearchTerm));
  }, [countries, selectedRegion, debouncedSearchTerm, setFilteredCountries]);

  useEffect(() => {
    setFilteredRegions(
      regions.map((region) => {
        region.selected =
          region.name === selectedRegion ? !region.selected : false;
        return region;
      })
    );
  }, [selectedRegion, regions, setFilteredRegions]);

  return { selectedRegion, filteredCountries, filteredRegions, setSearchTerm, setSelectedRegion }
};

export default useFilterState;
