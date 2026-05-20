# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end2end.spec.ts >> Parabank UI + API E2E Flow @e2e @regression >> Create Account Using UI And Validate Using API
- Location: tests\end2end.spec.ts:22:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: apiRequestContext.get: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome Kasturi Das
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Accounts Overview" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - row "Account Balance* Available Amount" [ref=e54]:
              - columnheader "Account" [ref=e55]
              - columnheader "Balance*" [ref=e56]
              - columnheader "Available Amount" [ref=e57]
          - rowgroup
          - rowgroup [ref=e58]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e59]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e60]
  - generic [ref=e62]:
    - list [ref=e63]:
      - listitem [ref=e64]:
        - link "Home" [ref=e65] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "About Us" [ref=e67] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Services" [ref=e69] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e70]:
        - link "Products" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Locations" [ref=e73] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e74]:
        - link "Forum" [ref=e75] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e76]:
        - link "Site Map" [ref=e77] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e78]:
        - link "Contact Us" [ref=e79] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e80]: © Parasoft. All rights reserved.
    - list [ref=e81]:
      - listitem [ref=e82]: "Visit us at:"
      - listitem [ref=e83]:
        - link "www.parasoft.com" [ref=e84] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
     |                             ^ Error: apiRequestContext.get: Target page, context or browser has been closed
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