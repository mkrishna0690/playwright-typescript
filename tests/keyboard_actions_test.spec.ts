import {test,expect} from '@playwright/test';

test('Enter action from Keyboard', async({page})=>{
    //Enter action from Keyboard
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").fill("Mobiles");
    await page.locator("#APjFqb").press("Enter");
});

test('Selecting & Deleting from Keyboard', async({page})=>{
    //Selecting & Deleting from Keyboard
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").fill("Mobiles");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Delete");
    await page.waitForTimeout(6000);
});

test('Press TAB and ENTER', async({page})=>{
    //Selecting & Deleting from Keyboard
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill("Laptops");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(6000);
});