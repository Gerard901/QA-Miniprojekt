const { test, expect } = require('@playwright/test');

test('TC-001 — logowanie poprawnymi danymi', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );

  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  await expect(
    page.locator('[data-test="inventory-item"]').first()
  ).toBeVisible();
});

test('TC-002 — logowanie z niepoprawnym hasłem', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('niepoprawne');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
  
    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  
    await expect(
      page.getByRole('button', { name: 'Login', exact: true })
    ).toBeVisible();
  });