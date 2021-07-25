/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  coverageAnalysis: "perTest",
  jest: {
    configFile: "./jest.config.js",
  },
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
};
