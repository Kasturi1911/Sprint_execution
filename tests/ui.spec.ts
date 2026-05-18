import { expect } from '@playwright/test';
import { test } from '../Fixtures/uiFixture';
import { JsonReader } from '../Utils/jsonReader';

const userData     = JsonReader.readJson('TestData/registerData.json');
const negativeData = JsonReader.readJson('TestData/negativeData.json');

userData.username = `user${Date.now()}`;

test.describe('Parabank UI Scenarios @smoke @regression', () => {

  test.beforeEach(async ({ registerPage, data }) => {
    await registerPage.openApplication(data.url);
  });

  test('Parabank UI Flow', async ({ registerPage, loginPage, openAccountPage, accountsOverviewPage }) => {

    await registerPage.clickRegisterLink();
    await registerPage.registerUser(userData);
    await registerPage.logout();
    await loginPage.login(userData.username, userData.password);
    await openAccountPage.openNewAccount();
    await accountsOverviewPage.validateAccountsOverview();
  });

  test('Password Mismatch Validation', async ({ registerPage, page }) => {

    await registerPage.clickRegisterLink();

    await registerPage.fillRegistrationForm({
      ...userData,
      username: `user${Date.now()}`,
      password: negativeData.passwordMismatch.password
    });

    await page.locator('#repeatedPassword')
      .fill(negativeData.passwordMismatch.confirmPassword);

    await registerPage.clickRegisterButton();

    await expect(page.locator('span.error'))
      .toContainText('Passwords did not match');

    await expect(page.locator('h1.title'))
      .not.toContainText('Welcome');
  });

});