import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CountryBox from "./CountryBox";

export const countryFakeData = {
  alpha3Code: "usa",
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  population: 323947000,
  region: "Americas",
  capital: "Washington, D.C.",
};

export const countryFakeDataPopulationZero = {
  alpha3Code: "usa",
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  population: 0,
  region: "Americas",
  capital: "Washington, D.C.",
};

export const countryFakeDataPopulationNull = {
  alpha3Code: "usa",
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  region: "Americas",
  capital: "Washington, D.C.",
};

export const countryFakeDataNoCapital = {
  alpha3Code: "usa",
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  population: 323947000,
  region: "Americas",
};

describe("CountryBox Component", () => {
  let queryByTestId;

  beforeEach(() => {
    const component = render(<CountryBox {...countryFakeData} />);
    queryByTestId = component.queryByTestId;
  });

  afterEach(cleanup);

  test("it renders", () => {
    render(<CountryBox />);
  });

  test("it renders image", () => {
    expect(queryByTestId("image")).toBeInTheDocument();
  });

  test("it renders alt image", () => {
    expect(queryByTestId("image")).toHaveAttribute("alt", countryFakeData.name);
  });

  test("it renders name", () => {
    expect(queryByTestId("name")).toBeInTheDocument();
    expect(queryByTestId("name")).toHaveTextContent(countryFakeData.name);
  });

  test("it not renders zero population", () => {
    cleanup();
    const { queryByTestId: scopedQueryByTestId } = render(
      <CountryBox {...countryFakeDataPopulationZero} />
    );
    expect(scopedQueryByTestId("population")).toBeFalsy();
  });

  test("it not renders null population", () => {
    cleanup();
    const { queryByTestId: scopedQueryByTestId } = render(
      <CountryBox {...countryFakeDataPopulationNull} />
    );
    expect(scopedQueryByTestId("population")).toBeFalsy();
  });

  test("it renders population w/ localeString", () => {
    expect(queryByTestId("population")).toBeInTheDocument();
    expect(queryByTestId("population")).toHaveTextContent(
      countryFakeData.population.toLocaleString()
    );
  });

  test("it renders region", () => {
    expect(queryByTestId("region")).toBeInTheDocument();
    expect(queryByTestId("region")).toHaveTextContent(countryFakeData.region);
  });

  test("it renders capital", () => {
    expect(queryByTestId("capital")).toBeInTheDocument();
    expect(queryByTestId("capital")).toHaveTextContent(countryFakeData.capital);
  });

  test("it not renders capital", () => {
    cleanup();
    const { queryByTestId: scopedQueryByTestId } = render(
      <CountryBox {...countryFakeDataNoCapital} />
    );
    expect(scopedQueryByTestId("capital")).toBeNull();
  });
});
