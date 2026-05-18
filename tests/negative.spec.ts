import { mergeTests, expect } from '@playwright/test';
import { test as apiTest } from '../Fixtures/apiFixture';
import { test as uiTest } from '../Fixtures/uiFixture';
import { JsonReader } from '../Utils/jsonReader';

const test = mergeTests(apiTest, uiTest);

const negativeData = JsonReader.readJson('TestData/negativeData.json');

test.describe('Parabank Negative UI Scenarios', () => {

  test.beforeEach(async ({ registerPage, data }) => {
    await registerPage.openApplication(data.url);
  });

  test.describe('Login Negative Scenarios', () => {
test('Invalid Username and Password', async ({ loginPage, page }) => {
  await loginPage.attemptLogin(negativeData.invalidLogin.username, negativeData.invalidLogin.password);
  await expect(page.locator('text=The username and password could not be verified')).toBeVisible({ timeout: 15000 });
});

test('Empty Username Validation', async ({ loginPage, page }) => {
  await loginPage.attemptLogin('', negativeData.emptyUsername.password);
  await expect(page.locator('text=Please enter a username and password.')).toBeVisible({ timeout: 15000 });
});

test('Empty Password Validation', async ({ loginPage, page }) => {
  await loginPage.attemptLogin(negativeData.emptyPassword.username, '');
  await expect(page.locator('text=Please enter a username and password.')).toBeVisible({ timeout: 15000 });
});

  });

  test.describe('Registration Negative Scenarios', () => {

    test.beforeEach(async ({ registerPage }) => {
      await registerPage.clickRegisterLink();
    });

    test('Empty Registration Form Validation', async ({ registerPage, page }) => {
      await registerPage.clickRegisterButton();
      await expect(page.locator('#customer\\.firstName\\.errors')).toContainText('First name is required');
      await expect(page.locator('#customer\\.lastName\\.errors')).toContainText('Last name is required');
    });

    test('Password Mismatch Validation', async ({ registerPage, page }) => {
      await registerPage.fillRegistrationForm({
        ...negativeData.passwordMismatch.user,
        username: `user${Date.now()}`,
        password: negativeData.passwordMismatch.password,
      });
      await page.locator('#repeatedPassword').fill(negativeData.passwordMismatch.confirmPassword);
      await registerPage.clickRegisterButton();
      await expect(page.locator('#repeatedPassword\\.errors')).toContainText('Passwords did not match');
    });

  });

});