import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CountryList from "./CountryList";

export const countries = [
  {
    alpha3Code: 'USA',
    flag: "https://restcountries.eu/data/usa.svg",
    name: "United States of America",
    population: 323947000,
    region: "Americas",
    capital: "Washington, D.C.",
  },
  {
    alpha3Code: 'ITA',
    flag: "https://restcountries.eu/data/ita.svg",
    name: "Italy",
    population: 60665551,
    region: "Europe",
    capital: "Rome",
  },
  {
    alpha3Code: 'JPN',
    flag: "https://restcountries.eu/data/jpn.svg",
    name: "Japan",
    population: 126960000,
    region: "Asia",
    capital: "Tokyo",
  },
];

describe("CountryList Component", () => {
  let component, getByTestId, getByText, getAllByTestId;

  beforeEach(() => {
    component = render(<CountryList countries={countries} />);
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getAllByTestId = component.getAllByTestId;
  });

  afterEach(cleanup);

  test("it renders", () => {
    render(<CountryList countries={countries} />);
  });

  test("it contains 3 box", () => {
    expect(getAllByTestId("image")).toEqual(3);
  });
});
