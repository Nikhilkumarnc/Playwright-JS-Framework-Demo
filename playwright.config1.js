// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { workers } from 'cluster';
import { debug } from 'console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 3,
//   workers: 1,
  timeout: 15000,
  expect : {
    timeout: 5000,
  },
  fullyParallel: false,
  reporter : 'html',
  projects : [
    {
        name: 'safari',
        use:{
                browserName: 'webkit',
                headless: true,
                screenshot: 'on', 
                trace: 'retain-on-fail',
            },
    },
    {
        name: 'chrome',
         use:{
                browserName: 'chromium',
                headless: false,
                screenshot: 'on', 
                trace: 'retain-on-fail',
            },
    }
  ]
});
module.exports = config