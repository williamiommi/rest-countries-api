import { fetcher } from "../utils";

export default async function getCountryBorders(countryBorders) {
  return await fetcher(
    `https://restcountries.eu/rest/v2/alpha?codes=${countryBorders}&fields=name;alpha3Code`
  );
}
