// Read by `npx eyes-storybook`. Batch, branch and API key come from the Jenkins plugin's
// APPLITOOLS_* environment variables, which override anything set here.
module.exports = {
  appName: 'Storybook Sandbox',
  browser: [
    { name: 'chrome', width: 1024, height: 768 },
    { name: 'firefox', width: 1024, height: 768 },
  ],
};
