import {test,expect} from '@playwright/test';

test.skip('SKIP Test',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
})

test.only('Only Test',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
})