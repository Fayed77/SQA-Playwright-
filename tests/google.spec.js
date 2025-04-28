const{test,expect}=require('@playwright/test');

test.only("Verify application title", async function ({page}){

await page.goto('https://www.google.com/')

const url = await page.url()

console.log("Title is" + url)

await expect(page).toHaveTitle(“Google”)

})



