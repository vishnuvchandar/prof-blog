module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/components/css/"],
    //setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testRegex: '(<rootDir>/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    "moduleNameMapper": {
      "\\.(css|less)$": "identity-obj-proxy"
    }
  };