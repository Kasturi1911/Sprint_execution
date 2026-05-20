# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> ParaBank Account APIs >> Get Account @smoke @api @regression
- Location: tests\api.spec.ts:35:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 12545
Received: 12434
```

# Test source

```ts
  1  | import { test, expect } from '../Fixtures/apiFixture';
  2  | import Assert from '../Utils/apiAssert';
  3  | import { JsonReader } from '../Utils/jsonReader';
  4  | 
  5  | const createAccountData = JsonReader.readJson('TestData/createAccountData.json');
  6  | const negativeData      = JsonReader.readJson('TestData/negativeData.json');
  7  | 
  8  | test.describe('ParaBank Account APIs', () => {
  9  | 
  10 |   // POST — Create New Account
  11 |   test('Create New Account @smoke @api', async ({ userAPI }) => {
  12 | 
  13 |     const response = await userAPI.createAccount(
  14 |       createAccountData.customerId,
  15 |       createAccountData.newAccountType,
  16 |       createAccountData.fromAccountId
  17 |     );
  18 | 
  19 |     Assert.verifyStatusCode(response, 200);
  20 | 
  21 |     const body = await response.json();
  22 |     console.log(body);
  23 | 
  24 |     expect(body.id).toBeTruthy();
  25 |     expect(body.customerId).toBe(createAccountData.customerId);
  26 | 
  27 |     if (createAccountData.newAccountType === 0) {
  28 |       expect(body.type).toBe('CHECKING');
  29 |     } else {
  30 |       expect(body.type).toBe('SAVINGS');
  31 |     }
  32 |   });
  33 | 
  34 |   // GET — Get Account with schema and type validation
  35 |   test('Get Account @smoke @api @regression', async ({ userAPI }) => {
  36 | 
  37 |     const response = await userAPI.getAccount(createAccountData.fromAccountId);
  38 | 
  39 |     Assert.verifyStatusCode(response, 200);
  40 | 
  41 |     const body = await response.json();
  42 |     console.log(body);
  43 | 
  44 |     // Functional validation
  45 |     expect(body.id).toBe(createAccountData.fromAccountId);
> 46 |     expect(body.customerId).toBe(createAccountData.customerId);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  47 | 
  48 |     // Data type validation
  49 |     expect(typeof body.id).toBe('number');
  50 |     expect(typeof body.customerId).toBe('number');
  51 |     expect(typeof body.balance).toBe('number');
  52 |     expect(typeof body.type).toBe('string');
  53 |     expect(body.balance).toBeGreaterThanOrEqual(0);
  54 | 
  55 |     // Schema validation
  56 |     expect(body).toHaveProperty('id');
  57 |     expect(body).toHaveProperty('customerId');
  58 |     expect(body).toHaveProperty('balance');
  59 |     expect(body).toHaveProperty('type');
  60 |   });
  61 | 
  62 |   // NEGATIVE — Non-existent account
  63 |   test('TC-NEG-API-01 - GET accounts for non-existent customer ID @api', async ({ userAPI }) => {
  64 | 
  65 |     const response = await userAPI.getAccount(negativeData.nonExistentCustomerId);
  66 | 
  67 |     expect(response.status()).not.toBe(200);
  68 |     Assert.verifyStatusCode(response, 400);
  69 | 
  70 |     const body = await response.text();
  71 |     console.log('Response body:', body);
  72 | 
  73 |     expect(body).toBeTruthy();
  74 |   });
  75 | 
  76 | });
```