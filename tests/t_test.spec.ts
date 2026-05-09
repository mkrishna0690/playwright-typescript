import { test, expect } from '@playwright/test';

test('Test1', {tag:['@RegressionTesting']},async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com");
    await page.locator("//a[text()='Log in']").click();
    await page.locator("#Email").fill("sample100@test.com")
    await page.locator("#Password").fill("M12345")
    await page.locator("//input[@value='Log in']").click();

});


test('Test2',{tag:['@smokeTesting']}, async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder('Enter Name').fill("FirstName")
    await page.getByPlaceholder('Enter EMail').fill('email@test.com')

});

test('Test3', {tag:['@smokeTesting','@RegressionTesting']},async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com");
    await page.locator("//a[text()='Log in']").click();
    await page.locator("#Email").fill("sample100@test.com")
    await page.locator("#Password").fill("M12345")
    await page.locator("//input[@value='Log in']").click();

});

test('Test4',{tag:['@sanityTesting']}, async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder('Enter Name').fill("FirstName")
    await page.getByPlaceholder('Enter EMail').fill('email@test.com')

});
