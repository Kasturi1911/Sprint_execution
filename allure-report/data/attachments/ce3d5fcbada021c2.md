# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: negative.spec.ts >> Parabank Negative UI Scenarios >> Login Negative Scenarios >> Empty Username Validation
- Location: tests\negative.spec.ts:23:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('text=Please enter a username and password.')
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Please enter a username and password.')

```

# Test source

```ts
  1  | import { mergeTests, expect } from '@playwright/test';
  2  | import { test as apiTest } from '../Fixtures/apiFixture';
  3  | import { test as uiTest } from '../Fixtures/uiFixture';
  4  | import { JsonReader } from '../Utils/jsonReader';
  5  | 
  6  | const test = mergeTests(apiTest, uiTest);
  7  | 
  8  | const negativeData = JsonReader.readJson('TestData/negativeData.json');
  9  | 
  10 | test.describe('Parabank Negative UI Scenarios', () => {
  11 | 
  12 |   test.beforeEach(async ({ registerPage, data }) => {
  13 |     await registerPage.openApplication(data.url);
  14 |   });
  15 | 
  16 |   test.describe('Login Negative Scenarios', () => {
  17 | 
  18 |     test('Invalid Username and Password', async ({ loginPage, page }) => {
  19 |       await loginPage.attemptLogin(negativeData.invalidLogin.username, negativeData.invalidLogin.password);
  20 |       await expect(page.locator('text=The username and password could not be verified')).toBeVisible();
  21 |     });
  22 | 
  23 |     test('Empty Username Validation', async ({ loginPage, page }) => {
  24 |       await loginPage.attemptLogin('', negativeData.emptyUsername.password);
> 25 |       await expect(page.locator('text=Please enter a username and password.')).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  26 |     });
  27 | 
  28 |     test('Empty Password Validation', async ({ loginPage, page }) => {
  29 |       await loginPage.attemptLogin(negativeData.emptyPassword.username, '');
  30 |       await expect(page.locator('text=Please enter a username and password.')).toBeVisible();
  31 |     });
  32 | 
  33 |   });
  34 | 
  35 |   test.describe('Registration Negative Scenarios', () => {
  36 | 
  37 |     test.beforeEach(async ({ registerPage }) => {
  38 |       await registerPage.clickRegisterLink();
  39 |     });
  40 | 
  41 |     test('Empty Registration Form Validation', async ({ registerPage, page }) => {
  42 |       await registerPage.clickRegisterButton();
  43 |       await expect(page.locator('#customer\\.firstName\\.errors')).toContainText('First name is required');
  44 |       await expect(page.locator('#customer\\.lastName\\.errors')).toContainText('Last name is required');
  45 |     });
  46 | 
  47 |     test('Password Mismatch Validation', async ({ registerPage, page }) => {
  48 |       await registerPage.fillRegistrationForm({
  49 |         ...negativeData.passwordMismatch.user,
  50 |         username: `user${Date.now()}`,
  51 |         password: negativeData.passwordMismatch.password,
  52 |       });
  53 |       await page.locator('#repeatedPassword').fill(negativeData.passwordMismatch.confirmPassword);
  54 |       await registerPage.clickRegisterButton();
  55 |       await expect(page.locator('#repeatedPassword\\.errors')).toContainText('Passwords did not match');
  56 |     });
  57 | 
  58 |   });
  59 | 
  60 | });
```