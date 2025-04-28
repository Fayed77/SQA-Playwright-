const { test, expect } = require("@playwright/test");

test("Verify error message", async function({ page }) {

    await page.goto("https://www.saucedemo.com/");  // Go to the login page

    await page.locator('input[placeholder="Username"]').fill("standard_user", { delay: 200 }); // Fill Username

    await page.locator("input[name='password']").fill("secret_sauce"); // Fill Password

    await page.locator("//input[@type='submit']").click(); // Click Login Button

    // Wait for the error message to be visible with a longer timeout
    const errorLocator = page.locator('[data-test="error"]');
    await errorLocator.waitFor({ state: 'visible', timeout: 10000 });  // Increase timeout to 10 seconds

    // Get the error message text
    const errormessage = await errorLocator.textContent();

    // Log the error message
    console.log("Error message is: " + errormessage);

    
});
