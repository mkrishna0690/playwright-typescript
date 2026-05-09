import { test, expect } from '@playwright/test';
const inputs = ['Mobiles', 'Laptops', 'Chargers']

for (const input of inputs) {
    test(`Parameterize ${input}`, async ({ page }) => {
        //Enter action from Keyboard
        await page.goto("https://www.google.com/");
        await page.locator("#APjFqb").fill(input);
        await page.locator("#APjFqb").press("Enter");
    });

}

