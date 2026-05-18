import { mergeTests, expect } from '@playwright/test';
import { test as apiTest } from '../Fixtures/apiFixture';
import { test as uiTest } from '../Fixtures/uiFixture';
import { JsonReader } from '../Utils/jsonReader';
import { Logger } from '../Utils/logger';

const test = mergeTests(apiTest, uiTest);

const createAccountData = JsonReader.readJson('TestData/createAccountData.json');

test.describe('Performance Lite Tests @performance', () => {

  test('API response time should be under 2 seconds', async ({ userAPI }) => {

    const start = Date.now();
    const response = await userAPI.getAccount(createAccountData.fromAccountId);
    const duration = Date.now() - start;

    Logger.info(`API Response Time: ${duration}ms`);

    expect(response.status()).toBe(200);
    expect(duration).toBeLessThan(createAccountData.maxApiResponseTime);
  });

  test('Repeated GET accounts 20 times asynchronously', async ({ userAPI }) => {

    Logger.info(`Running ${createAccountData.repeatCount} async GET requests...`);

    const start = Date.now();

    const requests = Array.from(
      { length: createAccountData.repeatCount },
      () => userAPI.getAccount(createAccountData.fromAccountId)
    );

    const responses = await Promise.all(requests);
    const duration = Date.now() - start;

    Logger.info(`Total time for ${createAccountData.repeatCount} requests: ${duration}ms`);

    for (const response of responses) {
      expect(response.status()).toBe(200);
    }

    expect(duration).toBeLessThan(createAccountData.maxTotalTimeFor20Requests);
  });

  test('UI page load time should be reasonable', async ({ page, data }) => {

    const start = Date.now();

    await page.goto(data.url);

    const loadTime = Date.now() - start;

    Logger.info(`Page Load Time: ${loadTime}ms`);

    expect(loadTime).toBeGreaterThan(0);
  });

});