# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Performance Lite Tests @performance >> API response time should be under 2 seconds
- Location: tests\performance.spec.ts:10:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1  | import { test, expect } from '../Fixtures/apiFixture';
  2  | import { JsonReader } from '../Utils/jsonReader';
  3  | import { Logger } from '../Utils/logger';
  4  | 
  5  | const createAccountData = JsonReader.readJson('TestData/createAccountData.json');
  6  | const MAX_API_RESPONSE_TIME = 2000; // 2 seconds max
  7  | 
  8  | test.describe('Performance Lite Tests @performance', () => {
  9  | 
  10 |   test('API response time should be under 2 seconds', async ({ userAPI }) => {
  11 | 
  12 |     const start = Date.now();
  13 |     const response = await userAPI.getAccount(createAccountData.fromAccountId);
  14 |     const duration = Date.now() - start;
  15 | 
  16 |     Logger.info(`API Response Time: ${duration}ms`);
  17 | 
> 18 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  19 |     expect(duration).toBeLessThan(MAX_API_RESPONSE_TIME);
  20 |   });
  21 | 
  22 |   test('Repeated GET accounts 20 times asynchronously', async ({ userAPI }) => {
  23 | 
  24 |     Logger.info('Running 20 async GET requests...');
  25 | 
  26 |     const start = Date.now();
  27 | 
  28 |     const requests = Array.from({ length: 20 }, () =>
  29 |       userAPI.getAccount(createAccountData.fromAccountId)
  30 |     );
  31 | 
  32 |     const responses = await Promise.all(requests);
  33 |     const duration = Date.now() - start;
  34 | 
  35 |     Logger.info(`Total time for 20 requests: ${duration}ms`);
  36 | 
  37 |     for (const response of responses) {
  38 |       expect(response.status()).toBe(200);
  39 |     }
  40 | 
  41 |     // All 20 should complete in under 10 seconds total
  42 |     expect(duration).toBeLessThan(10000);
  43 |   });
  44 | 
  45 |   test('UI page load time should be reasonable', async ({ page, browser }) => {
  46 | 
  47 |     await page.goto('http://localhost:1010/parabank/index.htm');
  48 | 
  49 |     const loadTime = await page.evaluate(() => {
  50 |       const timing = performance.timing;
  51 |       return timing.loadEventEnd - timing.navigationStart;
  52 |     });
  53 | 
  54 |     Logger.info(`Page Load Time: ${loadTime}ms`);
  55 | 
  56 |     expect(loadTime).toBeGreaterThan(0);
  57 |   });
  58 | 
  59 | });
```