import { test, expect } from '@playwright/test';

test( 'adding articles to cart', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

//await page.route(
//    "**/*.{png,jpg,jpeg,webp, svg}" ,
//    (route) => route.abort()
//)

//LoginPage
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
//ShoppingPage
await expect(page.getByText('Products').isVisible());
await expect(page).toHaveScreenshot("shopping.png");
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
await page.locator('a').filter({ hasText: '2' }).click();
//CheckoutPage
await page.locator('[data-test="checkout"]').click();
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill('Ricky');
await page.locator('[data-test="lastName"]').click();
await page.locator('[data-test="lastName"]').fill('Blund');
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').fill('75015');
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();
//OrderConfirmationPage
await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
await page.locator('[data-test="back-to-products"]').click();
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.getByRole('link', { name: 'Logout' }).click();

});