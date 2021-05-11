import Head from "next/head";
// import components
import Header from "../components/Header";
import CountryBox from "../components/CountryBox";

const countryFakeData = {
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  population: 323947000,
  region: "Americas",
  capital: "Washington, D.C.",
};

export default function Home() {
  return (
    <div>
      <Header />
      <CountryBox {...countryFakeData} />
    </div>
  );
}
