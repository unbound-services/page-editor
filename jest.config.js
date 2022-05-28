/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // export default {
  preset: "ts-jest",
  // preset: "ts-jest/presets/js-with-ts",
  // preset: "ts-jest/presets/js-with-babel",
  // preset: "ts-jest/presets/default-esm",
  verbose: true,
  // preset: "jest-preset-preact",

  // // A set of global variables that need to be available in all test environments
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!preact)/"],

  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "<rootDir>/test.tsconfig.json",
      isolatedModules: true,
      // ts-jest configuration goes here
    },
  },

  // // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // // maxWorkers: "50%",

  // // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],

  // // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // "^react/jsx-runtime$": "preact/jsx-runtime",
    // "^react$": "preact-compat",
    // "^react-dom$": "preact-compat",
    "^react$": "preact/compat",
    "^react-dom/test-utils$": "preact/test-utils",
    "^react-dom/server$": "preact/compat",
    "^react-dom$": "preact/compat",
    "^react/jsx-runtime$": "preact/jsx-runtime",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "src/__mocks__/fileMock.js",
    "\\.(scss|css|less)$": "identity-obj-proxy",
    // "^react-dom/test-utils$": "preact/test-utils",
    //  "^config$": "configs/app-config.js"
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: ["src/setupTests.tsx"],

  testEnvironment: "jsdom",
};
