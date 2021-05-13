import { fetcher } from "../utils";

export default async function getCountriesAlpha3Code() {
    return await fetcher('https://restcountries.eu/rest/v2/all?fields=alpha3Code');
}
