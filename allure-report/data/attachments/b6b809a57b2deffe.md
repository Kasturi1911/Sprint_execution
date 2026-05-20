# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Performance Lite Tests @performance >> API response time should be under 2 seconds
- Location: tests\performance.spec.ts:13:3

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 2000
Received:   4882
```

# Test source

```ts
  1  | import { mergeTests, expect } from '@playwright/test';
  2  | import { test as apiTest } from '../Fixtures/apiFixture';
  3  | import { test as uiTest } from '../Fixtures/uiFixture';
  4  | import { JsonReader } from '../Utils/jsonReader';
  5  | import { Logger } from '../Utils/logger';
  6  | 
  7  | const test = mergeTests(apiTest, uiTest);
  8  | 
  9  | const createAccountData = JsonReader.readJson('TestData/createAccountData.json');
  10 | 
  11 | test.describe('Performance Lite Tests @performance', () => {
  12 | 
  13 |   test('API response time should be under 2 seconds', async ({ userAPI }) => {
  14 | 
  15 |     const start = Date.now();
  16 |     const response = await userAPI.getAccount(createAccountData.fromAccountId);
  17 |     const duration = Date.now() - start;
  18 | 
  19 |     Logger.info(`API Response Time: ${duration}ms`);
  20 | 
  21 |     expect(response.status()).toBe(200);
> 22 |     expect(duration).toBeLessThan(createAccountData.maxApiResponseTime);
     |                      ^ Error: expect(received).toBeLessThan(expected)
  23 |   });
  24 | 
  25 |   test('Repeated GET accounts 20 times asynchronously', async ({ userAPI }) => {
  26 | 
  27 |     Logger.info(`Running ${createAccountData.repeatCount} async GET requests...`);
  28 | 
  29 |     const start = Date.now();
  30 | 
  31 |     const requests = Array.from(
  32 |       { length: createAccountData.repeatCount },
  33 |       () => userAPI.getAccount(createAccountData.fromAccountId)
  34 |     );
  35 | 
  36 |     const responses = await Promise.all(requests);
  37 |     const duration = Date.now() - start;
  38 | 
  39 |     Logger.info(`Total time for ${createAccountData.repeatCount} requests: ${duration}ms`);
  40 | 
  41 |     for (const response of responses) {
  42 |       expect(response.status()).toBe(200);
  43 |     }
  44 | 
  45 |     expect(duration).toBeLessThan(createAccountData.maxTotalTimeFor20Requests);
  46 |   });
  47 | 
  48 |   test('UI page load time should be reasonable', async ({ page, data }) => {
  49 | 
  50 |     const start = Date.now();
  51 | 
  52 |     await page.goto(data.url);
  53 | 
  54 |     const loadTime = Date.now() - start;
  55 | 
  56 |     Logger.info(`Page Load Time: ${loadTime}ms`);
  57 | 
  58 |     expect(loadTime).toBeGreaterThan(0);
  59 |   });
  60 | 
  61 | });
```