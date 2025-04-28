const { test, expect } = require('@playwright/test');

test("My First test", async function({page}){
expect(12).toBe(12)

})

test("My second test", async function({page}){
    expect(100).toBe(101)
})

test.skip("My Third test", async function ({page}){
    expect(2.0).toBe(2.0)
})

test("My fourth test", async function ({page}){
    expect("fayed Khan").toContain("fayed")
    expect(true).toBeTruthy()
})

test("My fifth test", async function ({page}){
   
    expect(false).toBeFalsy()
})

test("My sixth test", async function({page}){
    expect("Fayed Khan".includes("Fayed")).toBeTruthy()
})