import {test,expect} from '@playwright/test';

test('Assertions',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
    await expect(page).toHaveTitle("Demo Web Shop")
    await expect(page.locator("#small-searchterms")).toBeEnabled;
    await expect(page.locator("#small-searchterms")).toBeEditable;
    await expect(page.locator("#small-searchterms")).toBeVisible;
    await expect(page.locator("#small-searchterms")).toBeDisabled;
    await expect(page.locator("#small-searchterms")).toBeEmpty;

});

test('Assertion_Test', async({page})=>{
    await test.step('Testing assetions',async()=>{
        await page.goto("https://demowebshop.tricentis.com/")
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
        await expect(page).toHaveTitle("Demo Web Shop")
        expect(page.locator("//input[@id='small-searchterms']")).toBeEnabled
        expect(page.locator("//input[@id='small-searchterms']")).toBeEditable
        expect(page.locator("//input[@id='small-searchterms']")).toBeVisible
        expect(page.locator("//input[@id='small-searchterms']")).toBeDisabled
        expect(page.locator("//input[@id='small-searchterms']")).toBeEmpty
        //soft assertion
        await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

    })
})