# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Performance Lite Tests @performance >> Repeated GET accounts 20 times asynchronously
- Location: tests\performance.spec.ts:25:3

# Error details

```
Error: apiRequestContext.get: socket hang up
Call log:
  - → GET http://localhost:1010/parabank/services/bank/accounts/13566
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:150.0.2) Gecko/20100101 Firefox/150.0.2
    - accept: application/json
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | import { BaseAPI } from './BaseAPI';
  2  | 
  3  | export class UserAPI extends BaseAPI {
  4  | 
  5  |   async createAccount(
  6  |   customerId: number,
  7  |   newAccountType: number,
  8  |   fromAccountId: number
  9  | ) {
  10 | 
  11 |    return await this.request.post(
  12 |     `${this.baseURL}/createAccount`,
  13 |     {
  14 |       headers: {
  15 |         Accept: 'application/json'
  16 |       },
  17 | 
  18 |       params: {
  19 |         customerId,
  20 |         newAccountType,
  21 |         fromAccountId
  22 |       }
  23 |     }
  24 |   );
  25 | }
  26 | 
  27 |   async getUser(id: number) {
  28 |     return await this.request.get(`${this.baseURL}/accounts/${id}`,
  29 | 
  30 |     
  31 |      {
  32 |       headers: {
  33 |         Accept: 'application/json'
  34 |       }
  35 |     });
  36 |   }
  37 | 
  38 | 
  39 |   async getAccount(accountId: number) {
> 40 |   return await this.request.get(
     |                             ^ Error: apiRequestContext.get: socket hang up
  41 |     `${this.baseURL}/accounts/${accountId}`,
  42 |     {
  43 |       headers: {
  44 |         Accept: 'application/json'
  45 |       }
  46 |     }
  47 |   );
  48 | }
  49 | 
  50 | 
  51 | async registerUser(user: any) {
  52 |   return await this.request.post(
  53 |     `${this.baseURL}/customers/new`,
  54 |     {
  55 |       headers: { 
  56 |         Accept: 'application/json',
  57 |         'Content-Type': 'application/json'
  58 |       },
  59 |       data: user
  60 |     }
  61 |   );
  62 | }
  63 | 
  64 | async getAccountsByCustomer(customerId: number) {
  65 |   return await this.request.get(
  66 |     `${this.baseURL}/customers/${customerId}/accounts`,
  67 |     {
  68 |       headers: { Accept: 'application/json' }
  69 |     }
  70 |   );
  71 | }
  72 |   // async updateUser(id: number, payload: any) {
  73 |   //   return await this.request.put(`${this.baseURL}/users/${id}`, { data: payload });
  74 |   // }
  75 | 
  76 |   // async deleteUser(id: number) {
  77 |   //   return await this.request.delete(`${this.baseURL}/users/${id}`);
  78 |   // }
  79 | }
```