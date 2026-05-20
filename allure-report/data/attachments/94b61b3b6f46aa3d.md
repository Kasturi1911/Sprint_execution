# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end2end.spec.ts >> Parabank UI + API E2E Flow @e2e @regression >> Create Account Using UI And Validate Using API
- Location: tests\end2end.spec.ts:23:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.selectOption: Test timeout of 60000ms exceeded.
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
      - generic [ref=e50]:
        - heading "Accounts Overview" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - row "Account Balance* Available Amount" [ref=e54]:
              - columnheader "Account" [ref=e55]
              - columnheader "Balance*" [ref=e56]
              - columnheader "Available Amount" [ref=e57]
          - rowgroup [ref=e58]:
            - row "17451 $515.50 $515.50" [ref=e59]:
              - cell "17451" [ref=e60]:
                - link "17451" [ref=e61] [cursor=pointer]:
                  - /url: activity.htm?id=17451
              - cell "$515.50" [ref=e62]
              - cell "$515.50" [ref=e63]
            - row "Total $515.50" [ref=e64]:
              - cell "Total" [ref=e65]
              - cell "$515.50" [ref=e66]
              - cell [ref=e67]
          - rowgroup [ref=e68]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e69]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e70]
  - generic [ref=e72]:
    - list [ref=e73]:
      - listitem [ref=e74]:
        - link "Home" [ref=e75] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "About Us" [ref=e77] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e78]:
        - link "Services" [ref=e79] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e80]:
        - link "Products" [ref=e81] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e82]:
        - link "Locations" [ref=e83] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e84]:
        - link "Forum" [ref=e85] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e86]:
        - link "Site Map" [ref=e87] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e88]:
        - link "Contact Us" [ref=e89] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e90]: © Parasoft. All rights reserved.
    - list [ref=e91]:
      - listitem [ref=e92]: "Visit us at:"
      - listitem [ref=e93]:
        - link "www.parasoft.com" [ref=e94] [cursor=pointer]:
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
  14 |     await this.page.locator('text=Open New Account')
  15 |       .click();
  16 | 
  17 |     Logger.info('Selecting Account Type');
  18 | 
  19 |     await this.page.locator('#type')
  20 |       .selectOption('1');
  21 | 
  22 |     Logger.info('Selecting From Account');
  23 | 
  24 |     await this.page.locator('#fromAccountId')
  25 |       .selectOption({ index: 0 });
  26 | 
  27 |     Logger.info('Creating New Account');
  28 | 
  29 |     await this.page.locator(
  30 |       'input[value="Open New Account"]'
  31 |     ).click();
  32 | 
  33 |     await expect(this.page.locator('#openAccountResult'))
  34 |       .toContainText('Account Opened!');
  35 | 
  36 |     Logger.info('Account Created Successfully');
  37 |     //  await this.page.screenshot({
  38 |     //   path: `screenshots/account-${newAccountId}.png`
  39 |     // });
  40 | 
  41 |     // Logger.info('Screenshot captured');
  42 | 
  43 |     // return newAccountId;
  44 |   }
  45 | 
  46 | 
  47 | 
  48 | 
  49 |  async createAccount() {
  50 | 
  51 |   await this.page
> 52 |     .selectOption(
     |      ^ Error: page.selectOption: Test timeout of 60000ms exceeded.
  53 |       '#type',
  54 |       '0'
  55 |     );
  56 | 
  57 |   await this.page
  58 |     .locator('#fromAccountId')
  59 |     .selectOption({ index: 0 });
  60 | 
  61 |   await this.page
  62 |     .getByRole('button', {
  63 |       name: 'Open New Account'
  64 |     })
  65 |     .click();
  66 | 
  67 |   await expect(
  68 |     this.page.locator('#openAccountResult')
  69 |   ).toContainText(
  70 |     'Account Opened!'
  71 |   );
  72 | 
  73 |   // WAIT FOR ACCOUNT ID
  74 |   await expect(
  75 |     this.page.locator('#newAccountId')
  76 |   ).toBeVisible();
  77 | 
  78 |   // GET ACCOUNT ID
  79 |   const accountIdText =
  80 |     await this.page
  81 |       .locator('#newAccountId')
  82 |       .innerText();
  83 | 
  84 |   const accountId =
  85 |     parseInt(accountIdText.trim());
  86 | 
  87 |   console.log(
  88 |     'New Account ID:',
  89 |     accountId
  90 |   );
  91 | 
  92 |   return accountId;
  93 |   }
  94 | }
  95 | 
  96 | 
```