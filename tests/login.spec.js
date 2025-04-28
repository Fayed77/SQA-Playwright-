const { test, expect } = require("@playwright/test");

test.only("Valid Login", async function({ page }) {  // 1. Add async

    await page.goto("https://www.saucedemo.com/");  // 2. Go to the login page

    await page.getByPlaceholder("Username").fill("standard_user"); // 3. Fill Username
    await page.locator("input[name='password']").fill("secret_sauce"); // 4. Fill Password

    await page.locator("//input[@type='submit']").click(); // 5. Click Login Button (Corrected XPath)

    await expect(page).toHaveURL(/inventory/); // 6. Check if URL contains 'inventory' (no .click())

    await page.locator("input[name='password']")

    await page.locator('#react-burger-menu-btn').click();

     // Click on Logout npx playwright test ./tests/verifyerrormessage.spec.js
  await page.locator('#logout_sidebar_link').click();

  // Expect to be back at the login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});  

