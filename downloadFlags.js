var https = require("https");
var fs = require("fs");
const fetch = require("node-fetch");
const fetcher = (url) => fetch(url).then((r) => r.json());

async function load() {
  const flags = await fetcher(
    "https://restcountries.eu/rest/v2/all?fields=alpha3Code;flag"
  );
  flags.map(({ alpha3Code, flag }) => {
    fetch(flag).then((res) => {
      const dest = fs.createWriteStream(`./flags/${alpha3Code}.svg`);
      res.body.pipe(dest);
      dest.on("finish", () => dest.close());
    });
  });
}

load();
