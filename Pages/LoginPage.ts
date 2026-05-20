import { expect, Page } from '@playwright/test';

import { Logger } from '../Utils/logger';

export class LoginPage {

  constructor(private page: Page) {}

  async login(username: string, password: string) {
  Logger.info('Entering Login Credentials');
  await this.page.locator('input[name="username"]').fill(username);
  await this.page.locator('input[name="password"]').fill(password);
  Logger.info('Clicking Login Button');
  await this.page.locator('input[value="Log In"]').click();
  await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible({ timeout: 15000 });
  Logger.info('Login Successful');
}

async attemptLogin(username: string, password: string) {
  Logger.info(`Attempting login with username: ${username}`);
  await this.page.locator('input[name="username"]').clear();
  await this.page.locator('input[name="username"]').fill(username);
  await this.page.locator('input[name="password"]').clear();
  await this.page.locator('input[name="password"]').fill(password);
  await this.page.locator('input[value="Log In"]').click();
  await this.page.waitForLoadState('domcontentloaded');
}
}