import {test,expect} from '@playwright/test';

test('drag and drop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dragElement = page.locator('#draggable')
    const dropElement = page.locator("#droppable")
    await dragElement.dragTo(dropElement);

});

test('drag and drop ->FRAME',async({page})=>{
    await page.goto("https://jqueryui.com/droppable/")
    const IFRAME = page.frameLocator(".demo-frame")
    const drag = IFRAME.locator('//div[@id="draggable"]')
    const drop = IFRAME.locator('//div[@id="droppable"]')
    await drag.dragTo(drop);
})
