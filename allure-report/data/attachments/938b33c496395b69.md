# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.ts >> Parabank UI Scenarios @smoke @regression >> Parabank UI Flow
- Location: tests\ui.spec.ts:16:7

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByLabel('First Name')

```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | import { Logger } from '../Utils/logger';
  3  | 
  4  | export class RegisterPage {
  5  | 
  6  |   constructor(private page: Page) {}
  7  | 
  8  |   async openApplication(url: string) {
  9  |     Logger.info('Opening Parabank');
  10 |     await this.page.goto(url);
  11 |   }
  12 | 
  13 |   async clickRegisterLink() {
  14 |     await this.page.getByRole('link', { name: 'Register' }).click();
  15 |   }
  16 | 
  17 |   async fillRegistrationForm(user: any) {
  18 |   Logger.info('Filling Registration Form');
  19 | 
> 20 |   await this.page.locator('[id="customer.firstName"]').fill(user.firstName);
     |                                               ^ Error: locator.fill: Test ended.
  21 |   await this.page.locator('[id="customer.lastName"]').fill(user.lastName);
  22 |   await this.page.locator('[id="customer.address.street"]').fill(user.address);
  23 |   await this.page.locator('[id="customer.address.city"]').fill(user.city);
  24 |   await this.page.locator('[id="customer.address.state"]').fill(user.state);
  25 |   await this.page.locator('[id="customer.address.zipCode"]').fill(user.zipCode);
  26 |   await this.page.locator('[id="customer.phoneNumber"]').fill(user.phone);
  27 |   await this.page.locator('[id="customer.ssn"]').fill(user.ssn);
  28 |   await this.page.locator('[id="customer.username"]').waitFor({ state: 'visible' });
  29 |   await this.page.locator('[id="customer.username"]').fill(user.username);
  30 |   await this.page.locator('[id="customer.password"]').fill(user.password);
  31 |   await this.page.locator('#repeatedPassword').fill(user.password);
  32 | }
  33 | 
  34 |   async submitRegistration(user: any) {
  35 |   Logger.info('Submitting Registration');
  36 |   await this.page.getByRole('button', { name: 'Register' }).click();
  37 |   await expect(this.page).toHaveURL(/register/, { timeout: 15000 });
  38 |   await expect(this.page.locator('h1.title')).toHaveText(`Welcome ${user.username}`, { timeout: 15000 });
  39 |   await expect(this.page.locator('#rightPanel')).toContainText('Your account was created successfully', { timeout: 15000 });
  40 |   Logger.info('Registration Successful');
  41 | }
  42 | 
  43 |   async clickRegisterButton() {
  44 |     await this.page.getByRole('button', { name: 'Register' }).click();
  45 |   }
  46 | 
  47 |   async registerUser(user: any) {
  48 |     await this.fillRegistrationForm(user);
  49 |     await this.submitRegistration(user);
  50 |   }
  51 | 
  52 |   async logout() {
  53 |     Logger.info('Logging Out');
  54 |     await this.page.locator('text=Log Out').click();
  55 |   }
  56 | 
  57 | }
```