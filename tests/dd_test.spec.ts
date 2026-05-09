import {test,expect} from '@playwright/test';

test('DD test', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Select drop down by value
    await page.locator('#country').selectOption('India');
    //Select drop down by label
    await page.locator('#country').selectOption({label:'United States'});
    //Select drop down by index
    await page.locator('#country').selectOption({index: 3});
    // Select drop down by visible text
    await page.locator('#country').selectOption('Australia');
    //validate all options in drop down
    const options = await page.locator('#country option').allTextContents();
    console.log(options);

});

