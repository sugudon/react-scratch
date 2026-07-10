module.exports = {
    testEnvironment: "jsdom",

    testPathIgnorePatterns: [
        // "<rootDir>/src/stories/",
    ],

    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    }
};