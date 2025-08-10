import { test, expect } from '@playwright/test';

test('mock search results', async ({ page }) => {
  await page.route('**/search*', async route => {
    const mock = { results: [{ title: 'Mocked Result 1' }, { title: 'Mocked Result 2' }] };
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mock) });
  });

  // Demo site you control would be ideal. For learning, just assert route works:
  // Navigate to a page that would call /search, or trigger fetch('/search') via evaluate:
  await page.goto('https://example.com');
  const response = await page.evaluate(async () => {
    const r = await fetch('/search?q=playwright').then(r => r.json());
    return r.results.length;
  });
  expect(response).toBe(2);
});
