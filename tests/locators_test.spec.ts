import {test,expect} from '@playwright/test';

test('Locators test', async ({page}) => {
    await test.step('Navigate to homepage', async () => {
        await page.goto('https://demowebshop.tricentis.com/');
     });
     await test.step('Click on Login link', async () => {
        await page.getByRole('link',{name:'Log in'}).screenshot({path: 'screenshots/login.png'});
        await page.getByRole('link',{name:'Log in'}).click();
    });
    await test.step('Enter email and password', async () => {
        await page.screenshot({path:'screenshots/login_page.png'});
        await page.getByLabel('Email:').fill('sample100@test.com');
        await page.getByLabel('Password:').fill('M12345');
        await page.getByRole('button',{name:'Log in'}).click();
    });
    await test.step('Click on Logout link', async () => {
        await page.screenshot({path:'screenshots/homepage.png', fullPage: true});
        await page.getByRole('link',{name:'Log out'}).click();
    });

    
});