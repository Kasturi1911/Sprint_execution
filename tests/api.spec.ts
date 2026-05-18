import { test, expect } from '../Fixtures/apiFixture';
import Assert from '../Utils/apiAssert';
import { JsonReader } from '../Utils/jsonReader';

const createAccountData = JsonReader.readJson('TestData/createAccountData.json');
const negativeData      = JsonReader.readJson('TestData/negativeData.json');

test.describe('ParaBank Account APIs', () => {

  // POST — Create New Account
  test('Create New Account @smoke @api', async ({ userAPI }) => {

    const response = await userAPI.createAccount(
      createAccountData.customerId,
      createAccountData.newAccountType,
      createAccountData.fromAccountId
    );

    Assert.verifyStatusCode(response, 200);

    const body = await response.json();
    console.log(body);

    expect(body.id).toBeTruthy();
    expect(body.customerId).toBe(createAccountData.customerId);

    if (createAccountData.newAccountType === 0) {
      expect(body.type).toBe('CHECKING');
    } else {
      expect(body.type).toBe('SAVINGS');
    }
  });

  // GET — Get Account with schema and type validation
  test('Get Account @smoke @api @regression', async ({ userAPI }) => {

    const response = await userAPI.getAccount(createAccountData.fromAccountId);

    Assert.verifyStatusCode(response, 200);

    const body = await response.json();
    console.log(body);

    // Functional validation
    expect(body.id).toBe(createAccountData.fromAccountId);
    expect(body.customerId).toBe(createAccountData.customerId);

    // Data type validation
    expect(typeof body.id).toBe('number');
    expect(typeof body.customerId).toBe('number');
    expect(typeof body.balance).toBe('number');
    expect(typeof body.type).toBe('string');
    expect(body.balance).toBeDefined();

    // Schema validation
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('customerId');
    expect(body).toHaveProperty('balance');
    expect(body).toHaveProperty('type');
  });

  // NEGATIVE — Non-existent account
  test('TC-NEG-API-01 - GET accounts for non-existent customer ID @api', async ({ userAPI }) => {

    const response = await userAPI.getAccount(negativeData.nonExistentCustomerId);

    expect(response.status()).not.toBe(200);
    Assert.verifyStatusCode(response, 400);

    const body = await response.text();
    console.log('Response body:', body);

    expect(body).toBeTruthy();
  });

});