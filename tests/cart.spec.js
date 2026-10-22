const { test, expect } = require('@playwright/test');

test('TC-004 — dodanie produktu do pustego koszyka', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );

  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

  await expect(cartBadge).toHaveCount(0);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(
    page.locator('[data-test="remove-sauce-labs-backpack"]')
  ).toBeVisible();

  await expect(cartBadge).toHaveText('1');

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/cart.html'
  );

  const cartItems = page.locator('[data-test="inventory-item"]');

  await expect(cartItems).toHaveCount(1);

  await expect(
    cartItems.locator('[data-test="inventory-item-name"]')
  ).toHaveText('Sauce Labs Backpack');

  await expect(
    cartItems.locator('[data-test="item-quantity"]')
  ).toHaveText('1');
});