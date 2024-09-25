import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
  testDir: './tests', // Specify the directory where your Playwright tests are located
  // Look for test files in the "tests" directory, relative to this configuration file.
  testMatch: /.*\.spec\.ts/,
  // Run all tests in parallel.
  fullyParallel: true,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:4200',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: { // If you need to serve your Angular app during tests
    command: 'ng serve', 
    port: 4200
  },
  // Run your local dev server before starting the tests.
//   webServer: {
//     command: 'npm run start',
//     url: 'http://localhost:4200'
//   }
});