import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CountryList from "./CountryList";

export const countries = [
  {
    alpha3Code: "USA",
    flag: "https://restcountries.eu/data/usa.svg",
    name: "United States of America",
    population: 323947000,
    region: "Americas",
    capital: "Washington, D.C.",
  },
  {
    alpha3Code: "ITA",
    flag: "https://restcountries.eu/data/ita.svg",
    name: "Italy",
    population: 60665551,
    region: "Europe",
    capital: "Rome",
  },
  {
    alpha3Code: "BEL",
    flag: "https://restcountries.eu/data/bel.svg",
    name: "Belgium",
    population: 11319511,
    region: "Europe",
    capital: "Brussels",
  },
  {
    alpha3Code: "JPN",
    flag: "https://restcountries.eu/data/jpn.svg",
    name: "Japan",
    population: 126960000,
    region: "Asia",
    capital: "Tokyo",
  },
];

describe("CountryList Component", () => {
  test("it renders", () => {
    render(<CountryList countries={countries} />);
  });

  test("it contains 4 box", () => {
    const { queryAllByTestId } = render(<CountryList countries={countries} />);
    expect(queryAllByTestId("country-box")).toHaveLength(4);
  });
});
