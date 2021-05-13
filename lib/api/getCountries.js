import { fetcher } from "../utils";

export default async function getCountries() {
    return await fetcher('https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;capital;population;region;flag');
}
