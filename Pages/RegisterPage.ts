import { expect, Page } from '@playwright/test';
import { Logger } from '../Utils/logger';

export class RegisterPage {

  constructor(private page: Page) {}

  async openApplication(url: string) {
    Logger.info('Opening Parabank');
    await this.page.goto(url);
  }

  async clickRegisterLink() {
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async fillRegistrationForm(user: any) {
  Logger.info('Filling Registration Form');

  await this.page.locator('[id="customer.firstName"]').fill(user.firstName);
  await this.page.locator('[id="customer.lastName"]').fill(user.lastName);
  await this.page.locator('[id="customer.address.street"]').fill(user.address);
  await this.page.locator('[id="customer.address.city"]').fill(user.city);
  await this.page.locator('[id="customer.address.state"]').fill(user.state);
  await this.page.locator('[id="customer.address.zipCode"]').fill(user.zipCode);
  await this.page.locator('[id="customer.phoneNumber"]').fill(user.phone);
  await this.page.locator('[id="customer.ssn"]').fill(user.ssn);
  await this.page.locator('[id="customer.username"]').waitFor({ state: 'visible' });
  await this.page.locator('[id="customer.username"]').fill(user.username);
  await this.page.locator('[id="customer.password"]').fill(user.password);
  await this.page.locator('#repeatedPassword').fill(user.password);
}

  async submitRegistration(user: any) {
  Logger.info('Submitting Registration');
  await this.page.getByRole('button', { name: 'Register' }).click();
  await expect(this.page).toHaveURL(/register/, { timeout: 15000 });
  await expect(this.page.locator('h1.title')).toHaveText(`Welcome ${user.username}`, { timeout: 15000 });
  await expect(this.page.locator('#rightPanel')).toContainText('Your account was created successfully', { timeout: 15000 });
  Logger.info('Registration Successful');
}

  async clickRegisterButton() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async registerUser(user: any) {
    await this.fillRegistrationForm(user);
    await this.submitRegistration(user);
  }

  async logout() {
    Logger.info('Logging Out');
    await this.page.locator('text=Log Out').click();
  }

}