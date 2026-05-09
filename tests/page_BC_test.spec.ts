import {test,expect} from '@playwright/test'

test('Login Logout',async({page,browser})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("//a[text()='Log in']").click();
    await page.locator("#Email").fill("sample100@test.com")
    await page.locator("#Password").fill("M12345")
    await page.locator("//input[@value='Log in']").click();
    expect(page.locator("//a[text()='sample100@test.com']")).toBeVisible;
    await page.locator("//a[text()='Log out']").click();

    //New Browser session -> create new page
    const context = await browser.newContext()
    const page2 = await context.newPage()
    await page2.goto("https://demowebshop.tricentis.com/")
    await page2.locator("//a[text()='Log in']").click();
    await page2.locator("#Email").fill("pop100@test.com")
    await page2.locator("#Password").fill("pop100")
    await page2.locator("//input[@value='Log in']").click();
    expect(page2.locator("//a[text()='sample100@test.com']")).toBeVisible;
    await page2.locator("//a[text()='Log out']").click();

    //Create New Tab
    const tab = await context.newPage()
    await tab.goto("https://demowebshop.tricentis.com/")
    await tab.locator("//a[text()='Log in']").click();
    await tab.locator("#Email").fill("pop100@test.com")
    await tab.locator("#Password").fill("pop100")
    await tab.locator("//input[@value='Log in']").click();
    expect(tab.locator("//a[text()='sample100@test.com']")).toBeVisible;
    await tab.locator("//a[text()='Log out']").click();
})