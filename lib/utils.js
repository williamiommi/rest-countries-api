import getCountryBorders from "./api/getCountryBorders";

const DARK_CLASS = "dark";

export const toggleTheme = () => {
  const htmlRoot = document.getElementsByTagName("html")[0];
  const isDark = htmlRoot.classList.contains(DARK_CLASS);
  htmlRoot.classList[isDark ? "remove" : "add"](DARK_CLASS);
  return !isDark;
};

export const fetcher = (url) => fetch(url).then((r) => r.json());

export const normalizeCountryDetails = async (countryDetail) => {
  if (countryDetail.currencies?.length > 0) {
    countryDetail.currencies = countryDetail.currencies
      .filter((currency) => currency.name) // some currencies doesn't have the name
      .map((currency) => currency.name);
  }
  if (countryDetail.languages?.length > 0) {
    countryDetail.languages = countryDetail.languages
      .filter((language) => language.name)
      .map((language) => language.name);
  }
  if (countryDetail.borders?.length > 0) {
    const countryBorders = await getCountryBorders(
      countryDetail.borders.join(";")
    );
    countryDetail.borders = countryBorders;
  }
  return countryDetail;
};

export const filterByRegionAndName = (countries, region, name) => {
  return countries.filter((country) => {
    const includeRegion =
      !region ||
      (country["region"] &&
        country["region"].toLowerCase().includes(region.toLowerCase()));
    const includeName =
      !name ||
      name.length < 3 ||
      (country["name"] &&
        country["name"].toLowerCase().includes(name.toLowerCase()));
    return includeRegion && includeName;
  });
};

export const getUniqRegions = (countries) => {
  const regions = new Set();
  countries.forEach((country) => {
    if (country.region) regions.add(country.region);
  });
  return [...regions]
    .sort()
    .map((region) => ({ name: region, selected: false }));
};
