export const isDarkOnLoad = () => {
  const isDark = window.localStorage.getItem("darkTheme");
  const htmlRoot = document.getElementsByTagName("html")[0];
  htmlRoot.classList[isDark === "true" ? "add" : "remove"]("dark");
};

export const toggleTheme = () => {
  const isDark = window.localStorage.getItem("darkTheme");
  const htmlRoot = document.getElementsByTagName("html")[0];
  window.localStorage.setItem("darkTheme", isDark === "true" ? false : true);
  htmlRoot.classList[isDark === "true" ? "remove" : "add"]("dark");
};

export const fetcher = (url) => fetch(url).then((r) => r.json());

export const filterByName = (countries, term) =>
  filterBy(countries, term, "name");
export const filterByRegion = (countries, term) =>
  filterBy(countries, term, "region");

export const filterBy = (countries, term, byAttribute) => {
  if (!term || term.length < 3) return countries;
  return countries.filter((country) =>
    country[byAttribute].toLowerCase().includes(term.toLowerCase())
  );
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
