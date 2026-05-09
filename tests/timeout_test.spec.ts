import {test,expect} from '@playwright/test'

test('Timeouts in Playwrigt',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

});