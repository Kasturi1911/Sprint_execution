import { test as base } from '@playwright/test';
import { UserAPI } from '../API/UserAPI';

const BASE_URL = 'http://localhost:1010/parabank/services/bank';  

type MyFixtures = {
  userAPI: UserAPI;
};

export const test = base.extend<MyFixtures>({
  userAPI: async ({ request }, use) => {

    const api = new UserAPI(request, BASE_URL); 

    await use(api);
  }
});

export { expect } from '@playwright/test';