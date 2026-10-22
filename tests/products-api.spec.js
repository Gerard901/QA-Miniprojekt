const { test, expect } = require('@playwright/test');

// Sprawdzamy odpowiedź na żądanie istniejącego produktu o id 1.

test('API-001 — pobranie istniejącego produktu', async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products/1');

  expect(response.status()).toBe(200);

  expect(response.headers()['content-type']).toContain('application/json');

  const product = await response.json();

  expect(product.id).toBe(1);
  expect(typeof product.title).toBe('string');
  expect(product.title.trim().length).toBeGreaterThan(0);
  expect(typeof product.price).toBe('number');
  expect(product.price).toBeGreaterThanOrEqual(0);
});

// Sprawdzamy odpowiedź na żądanie nieistniejącego produktu.

test('API-002 — pobranie nieistniejącego produktu', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products/999999');

  expect(response.status()).toBe(404);

  expect(response.headers()['content-type']).toContain('application/json');

  const error = await response.json();

  expect(typeof error.message).toBe('string');

  expect(error.message.trim().length).toBeGreaterThan(0);

  expect(error.message).toBe("Product with id '999999' not found");
});