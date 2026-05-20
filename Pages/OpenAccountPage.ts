import { expect, Page } from '@playwright/test';

import { Logger } from '../Utils/logger';

export class OpenAccountPage {

  constructor(private page: Page) {}

  async openNewAccount() {

    Logger.info('Opening New Account Page');
     await this.page.locator('text=Open New Account').waitFor({ state: 'visible' });

     await this.page.getByRole('link', { name: 'Open New Account' }).click();

    Logger.info('Selecting Account Type');

    await this.page.locator('#type').selectOption('1');

    Logger.info('Selecting From Account');

    await this.page.locator('#fromAccountId').selectOption({ index: 0 });

    Logger.info('Creating New Account');

    await this.page.locator('input[value="Open New Account"]').click();

    await expect(this.page.locator('#openAccountResult')).toContainText('Account Opened!');

    Logger.info('Account Created Successfully');
    //  await this.page.screenshot({
    //   path: `screenshots/account-${newAccountId}.png`
    // });

    // Logger.info('Screenshot captured');

    // return newAccountId;
  }




 async createAccount() {


await this.page.getByRole('link', { name: 'Open New Account' }).click();
await this.page.waitForLoadState('networkidle');       
await this.page.locator('#type').waitFor({ state: 'visible' });
await this.page.selectOption('#type', '0');

  await this.page.locator('#fromAccountId').selectOption({ index: 0 });

  await this.page.getByRole('button', { name: 'Open New Account' }).click();

  await expect(this.page.locator('#openAccountResult'))
    .toContainText('Account Opened!');

  await expect(this.page.locator('#newAccountId')).toBeVisible();

  const accountIdText = await this.page.locator('#newAccountId').innerText();
  const accountId = parseInt(accountIdText.trim());

  console.log('New Account ID:', accountId);

  return accountId;
}
}