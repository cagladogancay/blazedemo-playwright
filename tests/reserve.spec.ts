import { test, expect, Locator } from "@playwright/test";
let allAirlineRows: Locator;
let virginAmericaRows: Locator;
const virginAmericaName = 'Virgin America';
test.beforeEach(async ({ page }) => {
    allAirlineRows = page.locator('tbody tr');
    virginAmericaRows = allAirlineRows.filter({ hasText: virginAmericaName })
    await page.goto("https://blazedemo.com");
    await page.getByRole("button", { name: 'Find Flights' }).click();
})

test('Click to Choose This Flight as first item', async ({ page }) => {

    await allAirlineRows
        .nth(0)
        .getByRole('button', { name: 'Choose This Flight' })
        .click();
})

test('Click to Choose This Flight as third item', async ({ page }) => {
    await allAirlineRows
        .nth(2)
        .getByRole('button', { name: 'Choose This Flight' })
        .click();
})

test('Click to Choose This Flight as Lufthansa', async ({ page }) => {
     await allAirlineRows
        .filter({ hasText: 'Lufthansa' })
        .getByRole('button', { name: 'Choose This Flight' })
        .click();

})

test('Click to Choose This Flight as United Airlines', async ({ page }) => {
    await allAirlineRows
        .filter({ hasText: 'United Airlines' })
        .getByRole('button', { name: 'Choose This Flight' })
        .click();

})
test('Click to Choose This Flight as Virgin America number 12 ', async ({ page }) => {
    await virginAmericaRows
        .filter({ has: page.getByRole('cell', { name: '12', exact: true }) })
        .getByRole('button', { name: 'Choose This Flight' })
        .click();
})

test('Click to Choose This Flight as Virgin America number 43 ', async ({ page }) => {
    await virginAmericaRows
        .filter({ has: page.getByRole('cell', { name: '43', exact: true }) })
        .getByRole('button', { name: 'Choose This Flight' })
        .click();
})