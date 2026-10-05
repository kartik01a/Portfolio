module.exports = {
  ci: {
    collect: {
      url: ["http://127.0.0.1:3000/"],
      startServerCommand: "npm run start",
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--no-sandbox",
      },
    },
    assert: {
      assertions: {
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.05 }],
        "resource-summary:script:size": ["error", { maxNumericValue: 120000 }],
      },
    },
  },
};
