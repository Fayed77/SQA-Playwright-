const { test, expect } = require('@playwright/test');

test("select values from dropdown and validate", async function ({ page }) {

  // Step 1: Open the signup page
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  // Step 2: Select option by label
  await page.locator("#state").selectOption({ label: "Goa" });
  await page.waitForTimeout(1000); // wait just to see change

  // Step 3: Select option by value
  await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
  await page.waitForTimeout(1000); // wait to see change

  // Step 4: Validate all options in dropdown

let state=await page.$("#state")//returns state

let arrayofelements= await state.$$("option")

   //option is a feature, this finds all the options in an array we'll use this for length

for(let i=0;i<arrayofelements.length;i++){

    let element=arrayofelements[i]

    let value = await element.textContent()

    console.log("all dropdown values are"+value);


}



})
