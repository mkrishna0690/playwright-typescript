import {test,expect} from '@playwright/test';

test('Mouse Left Right Middle',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    //Left click
    //await page.locator("//a[text()='Log in']").click({button:'left'});
    //Right click
    //await page.locator("//a[text()='Log in']").click({button:'right'});
    //Middle click
    await page.locator("//a[text()='Log in']").click({button:'middle'});
    await page.waitForTimeout(6000);

});

test('Mouse Hover',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[text()='Point Me']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await page.locator("//button[text()='Point Me']").hover();
    await page.locator("//a[text()='Laptops']").click();
    await page.waitForTimeout(5000);

})

test('Double Click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[text()='Copy Text']").scrollIntoViewIfNeeded();
    await page.locator("//button[text()='Copy Text']").dblclick();
    await page.waitForTimeout(10000);


});