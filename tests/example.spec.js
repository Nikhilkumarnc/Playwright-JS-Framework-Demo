// @ts-check
import { test, expect } from '@playwright/test';

test('@sanity has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  const requiredText = 'Generate tests with Codegen';
  const whatIsNextList = page.locator('h2#whats-next + ul li');
  console.log(`page.locator('h2#whats-next + ul li'): ${whatIsNextList}`);
  for(let i = 0; i < await whatIsNextList.count(); i++){
    const receivedText = (await whatIsNextList.nth(i).textContent())?.trim()
    if(requiredText === receivedText){
      console.log('receivedText: ', receivedText);
      break;
    }
  }

  // await page.pause();
});


