import { cleanup, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CountryBox from "./CountryBox";

export const countryFakeData = {
  alpha3Code: 'usa',
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  population: 323947000,
  region: "Americas",
  capital: "Washington, D.C.",
};

export const countryFakeDataNoCapital = {
  alpha3Code: 'usa',
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  population: 323947000,
  region: "Americas",
};

describe("CountryBox Component", () => {
  let getByTestId, getByText;

  beforeEach(() => {
    const component = render(<CountryBox {...countryFakeData} />);
    getByTestId = component.getByTestId;
    getByText = component.getByText;
  });

  afterEach(cleanup);

  test("it renders", () => {
    render(<CountryBox />);
  });

  test("it renders src image", () => {
    expect(getByTestId('image')).toHaveAttribute('src', countryFakeData.flag);
  });

  test("it renders name", () => {
    expect(getByTestId('name')).toBeInTheDocument()
    expect(getByTestId('name')).toHaveTextContent(countryFakeData.name);
  });

  test("it renders population w/ localeString", () => {
    expect(getByTestId('population')).toBeInTheDocument()
    expect(getByTestId('population')).toHaveTextContent(countryFakeData.population.toLocaleString())
  });

  test("it renders region", () => {
    expect(getByTestId('region')).toBeInTheDocument()
    expect(getByTestId('region')).toHaveTextContent(countryFakeData.region);
  });

  test("it renders capital", () => {
    expect(getByTestId('capital')).toBeInTheDocument()
    expect(getByTestId('capital')).toHaveTextContent(countryFakeData.capital);
  });

  test("it not renders capital", () => {
    const { queryByTestId } = render(<CountryBox {...countryFakeDataNoCapital} />);
    expect(queryByTestId('capital')).toBeNull();
  });

});
