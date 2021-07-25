const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/_*.{js,jsx,ts,tsx}",
    "!**/.babelrc.{cjs,js}",
    "!**/.next/**",
    "!**/__mocks__/**",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/*.config.{js,ts}",
    "!**/*.d.ts",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  errorOnDeprecated: true,
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(jpg|jpeg|png)$": "<rootDir>/__mocks__/fileMock.ts"
  },
  resetMocks: true,
  restoreMocks: true,
  testEnvironment: "jsdom",
  verbose: true,
};

module.exports = config;