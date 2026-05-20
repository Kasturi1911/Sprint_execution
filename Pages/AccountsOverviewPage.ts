import { expect, Page } from '@playwright/test';

import { Logger } from '../Utils/logger';

export class AccountsOverviewPage {

  constructor(private page: Page) {}

  async validateAccountsOverview() {

    Logger.info('Validating Accounts Overview');

    await this.page.locator('text=Accounts Overview').click();

    await expect(this.page.getByRole('heading', {
        name: 'Accounts Overview'
      })).toBeVisible();

    await expect(this.page.locator('#accountTable')).toBeVisible();

    Logger.info('Accounts Overview Validated');
  }
}