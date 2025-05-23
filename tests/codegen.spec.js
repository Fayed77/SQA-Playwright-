import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-credentials-container"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="primary-header"] div').filter({ hasText: 'Swag Labs' }).first().click();
});