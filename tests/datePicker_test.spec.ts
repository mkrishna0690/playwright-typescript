import {test,expect} from '@playwright/test';
test('Date Pickers',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Hard coded date
    await page.locator("#datepicker").fill("05/20/2026");
    await page.locator("#datepicker").click();
    await page.locator("#datepicker").clear();
    //Selecting Dynamic Date
    await page.locator("#datepicker").click();
    const d = page.locator("//div[@id='ui-datepicker-div']/table/tbody/tr/td/a[text()='8']")
    d.click();
    console.log('Present Date:'+d.innerText)
    //await page.locator("#datepicker").clear();
    //Selecting past date
    await page.locator("#datepicker").click();
    await page.locator("//a[@title='Prev']").click();
    const pd = page.locator("//div[@id='ui-datepicker-div']/table/tbody/tr/td/a[text()='20']")
    pd.click();
    console.log('Past Date:'+pd.innerText)
     //Selecting future date
    await page.locator("#datepicker").click();
    await page.locator("//a[@title='Next']").click();
    const fd = page.locator("//div[@id='ui-datepicker-div']/table/tbody/tr/td/a[text()='17']")
    fd.click();
    console.log('Future Date:'+fd.innerText)
    await page.waitForTimeout(6000);
    
});

