import { mergeTests, expect } from '@playwright/test';
import { test as apiTest } from '../Fixtures/apiFixture';
import { test as uiTest } from '../Fixtures/uiFixture';
import { JsonReader } from '../Utils/jsonReader';
import { Logger } from '../Utils/logger';
import Assert from '../Utils/apiAssert';

const test = mergeTests(apiTest, uiTest);

const registerData = JsonReader.readJson('TestData/registerData.json');

registerData.username = `user${Date.now()}`;

let createdAccountId: number;

test.describe('Parabank UI + API E2E Flow @e2e @regression', () => {

  test.beforeEach(async ({ registerPage, data }) => {
    await registerPage.openApplication(data.url);
  });

  test('Create Account Using UI And Validate Using API', async ({
    page,userAPI,registerPage,loginPage,openAccountPage,accountsOverviewPage
  }) => {

    // STEP 1 OPEN APPLICATION handled by beforeEach

    // STEP 2 REGISTER USER
    Logger.info('STEP 2: Registering User');
    await registerPage.clickRegisterLink();
    await registerPage.registerUser(registerData);

    // STEP 3  LOGOUT
    Logger.info('STEP 3: Logging Out');
    await registerPage.logout();

    // STEP 4  LOGIN
    Logger.info('STEP 4: Logging In');
    await loginPage.login(registerData.username, registerData.password);

    // STEP 5  CREATE ACCOUNT USING UI
    Logger.info('STEP 5: Creating New Account via UI');
    createdAccountId = await openAccountPage.createAccount();

    Logger.info(`Account Created Successfully - ID: ${createdAccountId}`);

    await page.screenshot({ path: `screenshots/account-${createdAccountId}.png` });

    // STEP 6  VALIDATE UI - ACCOUNTS OVERVIEW
    Logger.info('STEP 6: Validating Accounts Overview');
    await accountsOverviewPage.validateAccountsOverview();

    await expect(page.locator('#accountTable'))
      .toContainText(String(createdAccountId));

    Logger.info('Account visible in Accounts Overview');

    // STEP 7  VALIDATE USING API
    Logger.info(`STEP 7: Validating account via API - ID: ${createdAccountId}`);

    const response = await userAPI.getAccount(createdAccountId);

    Assert.verifyStatusCode(response, 200);

    const body = await response.json();
    Logger.info(`API Response: ${JSON.stringify(body)}`);

    expect(body.id).toBe(createdAccountId);
    expect(body.type).toBeTruthy();
    expect(body.balance).toBeDefined();

    Logger.info('API Validation Passed');
    Logger.info('E2E Test Completed Successfully');
  });

});