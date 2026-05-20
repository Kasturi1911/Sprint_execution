# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end2end.spec.ts >> Parabank UI + API E2E Flow @e2e @regression >> Create Account Using UI And Validate Using API
- Location: tests\end2end.spec.ts:22:3

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.selectOption: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('#type')

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
      - generic [ref=e48]:
        - heading "Welcome null" [level=1] [ref=e49]
        - paragraph [ref=e50]: Your account was created successfully. You are now logged in.
  - generic [ref=e52]:
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "About Us" [ref=e57] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "Services" [ref=e59] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Products" [ref=e61] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e62]:
        - link "Locations" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Forum" [ref=e65] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e66]:
        - link "Site Map" [ref=e67] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Contact Us" [ref=e69] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e70]: © Parasoft. All rights reserved.
    - list [ref=e71]:
      - listitem [ref=e72]: "Visit us at:"
      - listitem [ref=e73]:
        - link "www.parasoft.com" [ref=e74] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | 
  3  | import { Logger } from '../Utils/logger';
  4  | 
  5  | export class OpenAccountPage {
  6  | 
  7  |   constructor(private page: Page) {}
  8  | 
  9  |   async openNewAccount() {
  10 | 
  11 |     Logger.info('Opening New Account Page');
  12 |      await this.page.locator('text=Open New Account').waitFor({ state: 'visible' });
  13 | 
  14 |      await this.page.getByRole('link', { name: 'Open New Account' }).click();
  15 | 
  16 |     Logger.info('Selecting Account Type');
  17 | 
  18 |     await this.page.locator('#type').selectOption('1');
  19 | 
  20 |     Logger.info('Selecting From Account');
  21 | 
  22 |     await this.page.locator('#fromAccountId').selectOption({ index: 0 });
  23 | 
  24 |     Logger.info('Creating New Account');
  25 | 
  26 |     await this.page.locator('input[value="Open New Account"]').click();
  27 | 
  28 |     await expect(this.page.locator('#openAccountResult')).toContainText('Account Opened!');
  29 | 
  30 |     Logger.info('Account Created Successfully');
  31 |     //  await this.page.screenshot({
  32 |     //   path: `screenshots/account-${newAccountId}.png`
  33 |     // });
  34 | 
  35 |     // Logger.info('Screenshot captured');
  36 | 
  37 |     // return newAccountId;
  38 |   }
  39 | 
  40 | 
  41 | 
  42 | 
  43 |  async createAccount() {
  44 | 
  45 | await this.page.getByRole('link', { name: 'Open New Account' }).click();
  46 | 
> 47 |   await this.page.selectOption('#type', '0');
     |                   ^ Error: page.selectOption: Test timeout of 120000ms exceeded.
  48 | 
  49 |   await this.page.locator('#fromAccountId').selectOption({ index: 0 });
  50 | 
  51 |   await this.page.getByRole('button', { name: 'Open New Account' }).click();
  52 | 
  53 |   await expect(this.page.locator('#openAccountResult'))
  54 |     .toContainText('Account Opened!');
  55 | 
  56 |   await expect(this.page.locator('#newAccountId')).toBeVisible();
  57 | 
  58 |   const accountIdText = await this.page.locator('#newAccountId').innerText();
  59 |   const accountId = parseInt(accountIdText.trim());
  60 | 
  61 |   console.log('New Account ID:', accountId);
  62 | 
  63 |   return accountId;
  64 | }
  65 | }
```