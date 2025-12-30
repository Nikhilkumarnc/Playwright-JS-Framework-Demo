// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { debug } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 15000,
  expect : {
    timeout: 5000,
  },
  fullyParallel: false,
  reporter : 'html',
   use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on', 
    // trace: 'retain-on-fail',
    trace: 'on',
  },
   /*viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },*/
});
module.exports = config