import { test, expect, Locator } from "@playwright/test";
let allAirlineRows: Locator;
const flightTime = "1:45 AM"
const flightNumber = "234"
const flightPrice = "$472.56"
test.beforeEach(async ({ page }) => {
    allAirlineRows = page.locator("tbody tr")

    await page.goto("https://blazedemo.com");
    await page.getByRole("button", { name: "Find Flights" }).click();
})

test("Click on the flight departing at 1:45 AM", async ({ page }) => {
    await allAirlineRows
        .filter({ has:page.getByRole("cell",{name:flightTime,exact:true})})
        .getByRole("button", { name: "Choose This Flight" }).click();
})

test("Click the button for flight number 234", async ({ page }) => {
    await allAirlineRows
        .filter({ has: page.getByRole("cell", { name: flightNumber, exact: true }) })
        .getByRole("button", { name: "Choose This Flight" }).click();
})
test("Click the button for the flight priced at $472.56", async ({ page }) => {
    await allAirlineRows
        .filter({ has: page.getByRole("cell", { name: flightPrice, exact: true }) })
        .getByRole("button", { name: "Choose This Flight" }).click();
})

test("Click the button for the last flight in the table", async ({ page }) => {
    await allAirlineRows
        .last()
        .getByRole("button", { name: "Choose This Flight" }).click();
})