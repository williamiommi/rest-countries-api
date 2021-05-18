import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import { toggleTheme, getUniqRegions, filterByRegionAndName, normalizeCountryDetails } from "./utils";
import { countries } from '../components/CountryList.test';
import { countryFakeData  } from '../components/CountryDetail.test';

afterEach(cleanup);

describe("toggleTheme", () => {
  test("it change theme on html dom", () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    const htmlRoot = global.document.getElementsByTagName("html")[0];
    expect(htmlRoot.classList.contains("dark")).toBeFalsy();
    toggleTheme();
    expect(htmlRoot.classList.contains("dark")).toBeTruthy();
    toggleTheme();
    expect(htmlRoot.classList.contains("dark")).toBeFalsy();
  });
});

// describe("normalizeCountryDetails", () => {
//   test("it get normalized", async () => {
//     const normalized = await normalizeCountryDetails(countryFakeData);
//     expect(normalized).toBeTruthy();
//   });
// });

describe("filterByRegionAndName", () => {
  test("it filters by name with 1 result", () => {
    const filtered = filterByRegionAndName(countries, null, "unite");
    expect(filtered).toHaveLength(1);
    expect(filtered[0].name).toBe("United States of America");
  });

  test("it filters by name with 0 result", () => {
    const filtered = filterByRegionAndName(countries, null, "France");
    expect(filtered).toHaveLength(0);
  });

  test("it filters by region with 0 result", () => {
    const filtered = filterByRegionAndName(countries, "Polar");
    expect(filtered).toHaveLength(0);
  });

  test("it filters by region with 2 result", () => {
    const filtered = filterByRegionAndName(countries, "Europe");
    expect(filtered).toHaveLength(2);
    expect(filtered[0].capital).toBe("Rome");
    expect(filtered[1].capital).toBe("Brussels");
  });
});

describe("getUniqRegions", () => {
  const fakeRegionsInput = [
    { region: "Europe" },
    { region: "Oceania" },
    { region: "Americas" },
    { region: "Europe" },
    { region: "Africa" },
  ];
  const fakeRegionsOutput = [
    { name: "Africa", selected: false },
    { name: "Americas", selected: false },
    { name: "Europe", selected: false },
    { name: "Oceania", selected: false },
  ];
  test("it get uniq sorted regions", () => {
    const output = getUniqRegions(fakeRegionsInput);
    expect(output).toStrictEqual(fakeRegionsOutput);
  });
});
