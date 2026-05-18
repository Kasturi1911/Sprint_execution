import { test as base } from '@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage';
import { LoginPage } from '../Pages/LoginPage';
import { OpenAccountPage } from '../Pages/OpenAccountPage';
import { AccountsOverviewPage } from '../Pages/AccountsOverviewPage';

type MyFixtures = {
  data: { url: string };
  registerPage: RegisterPage;
  loginPage: LoginPage;
  openAccountPage: OpenAccountPage;
  accountsOverviewPage: AccountsOverviewPage;
};

export const test = base.extend<MyFixtures>({

  data: async ({}, use) => {
    await use({ url: 'http://localhost:1010/parabank' });
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  openAccountPage: async ({ page }, use) => {
    await use(new OpenAccountPage(page));
  },

  accountsOverviewPage: async ({ page }, use) => {
    await use(new AccountsOverviewPage(page));
  }

});

export { expect } from '@playwright/test';