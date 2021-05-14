const { defaults } = require("jest-config");

module.exports = {
  ...defaults,
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
      },
    ],
  ],
  setupFiles: ["./jest/setupTest.js"],
};
