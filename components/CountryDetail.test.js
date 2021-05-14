import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CountryDetail from "./CountryDetail";

export const countryFakeData = {
  alpha3Code: "USA",
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  nativeName: "United States",
  population: 323947000,
  region: "Americas",
  subregion: "Northern America",
  capital: "Washington, D.C.",
  currencies: ["United States dollar"],
  languages: ["English", "Spanish"],
  topLevelDomain: [".us"],
  borders: [
    { alpha3Code: "CAN", name: "Canada" },
    { alpha3Code: "MEX", name: "Mexico" },
  ],
};

export const countryFakeDataPopulationZero = {
  ...countryFakeData,
  population: 0,
};

export const countryFakeDataPopulationNull = {
  ...countryFakeData,
  population: null,
};

export const countryFakeDataNoCapital = {
  ...countryFakeData,
  capital: null,
};

export const countryFakeDataNoBorders = {
  ...countryFakeData,
  borders: [],
};

describe("CountryDetail Component", () => {
  let queryByTestId;
  let queryAllByTestId;

  beforeEach(() => {
    const component = render(<CountryDetail country={countryFakeData} />);
    queryByTestId = component.queryByTestId;
    queryAllByTestId = component.queryAllByTestId;
  });

  afterEach(cleanup);

  test("it renders", () => {
    render(<CountryDetail />);
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

  test("it renders nativeName", () => {
    expect(queryByTestId("nativeName")).toBeInTheDocument();
    expect(queryByTestId("nativeName")).toHaveTextContent(
      countryFakeData.nativeName
    );
  });

  test("it not renders zero population", () => {
    cleanup();
    const { queryByTestId: scopedQueryByTestId } = render(
      <CountryDetail country={countryFakeDataPopulationZero} />
    );
    expect(scopedQueryByTestId("population")).toBeFalsy();
  });

  test("it not renders null population", () => {
    cleanup();
    const { queryByTestId: scopedQueryByTestId } = render(
      <CountryDetail country={countryFakeDataPopulationNull} />
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

  test("it renders sub region", () => {
    expect(queryByTestId("subRegion")).toBeInTheDocument();
    expect(queryByTestId("subRegion")).toHaveTextContent(
      countryFakeData.subregion
    );
  });

  test("it renders capital", () => {
    expect(queryByTestId("capital")).toBeInTheDocument();
    expect(queryByTestId("capital")).toHaveTextContent(countryFakeData.capital);
  });

  test("it not renders capital", () => {
    cleanup();
    const { queryByTestId: scopedQueryByTestId } = render(
      <CountryDetail country={countryFakeDataNoCapital} />
    );
    expect(scopedQueryByTestId("capital")).toBeNull();
  });

  test("it renders currencies", () => {
    expect(queryByTestId("currencies")).toBeInTheDocument();
    expect(queryByTestId("currencies")).toHaveTextContent(
      countryFakeData.currencies.join(", ")
    );
  });

  test("it renders top Level Domain", () => {
    expect(queryByTestId("topLevelDomain")).toBeInTheDocument();
    expect(queryByTestId("topLevelDomain")).toHaveTextContent(
      countryFakeData.topLevelDomain.join(", ")
    );
  });

  test("it renders Languages", () => {
    expect(queryByTestId("languages")).toBeInTheDocument();
    expect(queryByTestId("languages")).toHaveTextContent(
      countryFakeData.languages.join(", ")
    );
  });

  test("it renders Border Countries", () => {
    expect(queryAllByTestId("country-border")).toHaveLength(2);
  });

  test("it not renders Border Countries", () => {
    cleanup();
    const { container, queryByTestId: scopedQueryByTestId } = render(
      <CountryDetail country={countryFakeDataNoBorders} />
    );
    expect(container).not.toHaveTextContent("Border Countries:");
    expect(scopedQueryByTestId("country-border")).toBeFalsy();
  });
});
