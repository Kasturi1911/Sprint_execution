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
- generic [active]:
  - generic [ref=e1]:
    - generic [ref=e2]:
      - link:
        - /url: admin.htm
        - img [ref=e3]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e4]
      - paragraph [ref=e5]: Experience the difference
    - generic [ref=e6]:
      - list [ref=e7]:
        - listitem [ref=e8]: Solutions
        - listitem [ref=e9]:
          - link "About Us" [ref=e10]:
            - /url: about.htm
        - listitem [ref=e11]:
          - link "Services" [ref=e12]:
            - /url: services.htm
        - listitem [ref=e13]:
          - link "Products" [ref=e14]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e15]:
          - link "Locations" [ref=e16]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e17]:
          - link "Admin Page" [ref=e18]:
            - /url: admin.htm
      - list [ref=e19]:
        - listitem [ref=e20]:
          - link "home" [ref=e21]:
            - /url: index.htm
        - listitem [ref=e22]:
          - link "about" [ref=e23]:
            - /url: about.htm
        - listitem [ref=e24]:
          - link "contact" [ref=e25]:
            - /url: contact.htm
    - generic [ref=e26]:
      - generic [ref=e27]:
        - paragraph [ref=e28]: Welcome Kasturi Das
        - heading "Account Services" [level=2] [ref=e29]
        - list [ref=e30]:
          - listitem [ref=e31]:
            - link "Open New Account" [ref=e32]:
              - /url: openaccount.htm
          - listitem [ref=e33]:
            - link "Accounts Overview" [ref=e34]:
              - /url: overview.htm
          - listitem [ref=e35]:
            - link "Transfer Funds" [ref=e36]:
              - /url: transfer.htm
          - listitem [ref=e37]:
            - link "Bill Pay" [ref=e38]:
              - /url: billpay.htm
          - listitem [ref=e39]:
            - link "Find Transactions" [ref=e40]:
              - /url: findtrans.htm
          - listitem [ref=e41]:
            - link "Update Contact Info" [ref=e42]:
              - /url: updateprofile.htm
          - listitem [ref=e43]:
            - link "Request Loan" [ref=e44]:
              - /url: requestloan.htm
          - listitem [ref=e45]:
            - link "Log Out" [ref=e46]:
              - /url: logout.htm
      - generic [ref=e49]:
        - heading "Accounts Overview" [level=1] [ref=e50]
        - table [ref=e51]:
          - rowgroup [ref=e52]:
            - row "Account Balance* Available Amount" [ref=e53]:
              - columnheader "Account" [ref=e54]
              - columnheader "Balance*" [ref=e55]
              - columnheader "Available Amount" [ref=e56]
          - rowgroup [ref=e57]:
            - row "17562 $515.50 $515.50" [ref=e58]:
              - cell "17562" [ref=e59]:
                - link "17562" [ref=e60]:
                  - /url: activity.htm?id=17562
              - cell "$515.50" [ref=e61]
              - cell "$515.50" [ref=e62]
            - row "Total $515.50" [ref=e63]:
              - cell "Total" [ref=e64]
              - cell "$515.50" [ref=e65]
              - cell [ref=e66]
          - rowgroup [ref=e67]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e68]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e69]
  - generic [ref=e70]:
    - list [ref=e71]:
      - listitem [ref=e72]:
        - link "Home" [ref=e73]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e74]:
        - link "About Us" [ref=e75]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Services" [ref=e77]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e78]:
        - link "Products" [ref=e79]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e80]:
        - link "Locations" [ref=e81]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e82]:
        - link "Forum" [ref=e83]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e84]:
        - link "Site Map" [ref=e85]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e86]:
        - link "Contact Us" [ref=e87]:
          - /url: contact.htm
    - paragraph [ref=e88]: © Parasoft. All rights reserved.
    - list [ref=e89]:
      - listitem [ref=e90]: "Visit us at:"
      - listitem [ref=e91]:
        - link "www.parasoft.com" [ref=e92]:
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