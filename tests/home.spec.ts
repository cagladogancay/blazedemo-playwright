import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {

    await page.goto("https: //blazedemo.com")

})

test('Click to vacation link', async ({ page }) => {
    await page.getByRole('link', {name:'destination of the week! The Beach!'}).click()
});

test('Click to find flights', async ({ page }) => {
    await page.getByRole('button', { name: 'Find Flights' }).click()
})

