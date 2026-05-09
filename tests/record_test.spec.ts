import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await test.step('Navigate to homepage', async () => {
        await page.goto('https://demowebshop.tricentis.com/');
    });

    await test.step('Click on Login link', async () => {
        //Element screenshot
        await page.locator('//a[text()="Log in"]').screenshot({path: 'screenshots/login.png'});
        await page.locator('//a[text()="Log in"]').click();
    }); 

    await test.step('Enter email and password', async () => {
        //Page screenshot
        await page.screenshot({path:'screenshots/login_page.png'});
        await page.locator('#Email').fill('sample100@test.com');
        await page.locator('#Password').fill('M12345');
        await page.locator('//input[@value="Log in"]').click();
    });
     
    await test.step('Click on Logout link', async () => {
        //Full page screenshot
        await page.screenshot({path:'screenshots/homepage.png', fullPage: true});
        await page.locator('//a[text()="Log out"]').click();
    });
    
    await page.waitForTimeout(5000);
});



