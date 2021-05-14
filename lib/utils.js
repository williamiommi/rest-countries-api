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

export const filterByRegionAndName = (countries, region, name) => {
  return countries.filter((country) => {
    const includeRegion = !region || country['region'].toLowerCase().includes(region.toLowerCase());
    const includeName = (!name || name.length < 3) || country['name'].toLowerCase().includes(name.toLowerCase());
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
