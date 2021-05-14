import { fetcher, normalizeCountryDetails } from "../utils";
import getCountryBorders from "./getCountryBorders";

export default async function getCountryDetail(code) {
  const countryDetail = await fetcher(
    `https://restcountries.eu/rest/v2/alpha/${code}?fields=alpha3Code;name;nativeName;capital;population;region;subregion;flag;topLevelDomain;currencies;languages;borders`
  );
  if (countryDetail.status === 400) return null;
  return normalizeCountryDetails(countryDetail);
}
