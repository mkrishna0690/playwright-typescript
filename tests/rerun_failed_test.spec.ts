import {test,expect} from '@playwright/test';

test.describe('Smoke Testing',()=>{
    test('Test1',async({page})=>{
        await page.goto("https://demowebshop.tricentis.com");
        await page.locator("//a[text()='Log in']").click();
        await page.locator("#Email").fill("sample100@test.com")
        await page.locator("#Password").fill("M12")
        await page.locator("//input[@value='Log in']").click();
    })
});

test.describe('Regression Testing',()=>{
    test('Test2',async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.getByPlaceholder('Enter Nam').fill("FirstName")
        await page.getByPlaceholder('Enter EMail').fill('email@test.com')
    })

});