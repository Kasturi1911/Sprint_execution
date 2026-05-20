# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end2end.spec.ts >> Parabank UI + API E2E Flow @e2e @regression >> Create Account Using UI And Validate Using API
- Location: tests\end2end.spec.ts:22:3

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('h1.title')
Expected: "Welcome user1779092987453"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('h1.title')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome Kasturi Das
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- list:
  - listitem: ATM Services
  - listitem:
    - link "Withdraw Funds":
      - /url: services/ParaBank?wsdl
  - listitem:
    - link "Transfer Funds":
      - /url: services/ParaBank?wsdl
  - listitem:
    - link "Check Balances":
      - /url: services/ParaBank?wsdl
  - listitem:
    - link "Make Deposits":
      - /url: services/ParaBank?wsdl
- list:
  - listitem: Online Services
  - listitem:
    - link "Bill Pay":
      - /url: services/bank?_wadl&_type=xml
  - listitem:
    - link "Account History":
      - /url: services/bank?_wadl&_type=xml
  - listitem:
    - link "Transfer Funds":
      - /url: services/bank?_wadl&_type=xml
- paragraph:
  - link "Read More":
    - /url: services.htm
- heading "Latest News" [level=4]
- list:
  - listitem
- paragraph:
  - link "Read More":
    - /url: news.htm
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | import { Logger } from '../Utils/logger';
  3  | 
  4  | export class RegisterPage {
  5  | 
  6  |   constructor(private page: Page) {}
  7  | 
  8  |   async openApplication(url: string) {
  9  |     Logger.info('Opening Parabank');
  10 |     await this.page.goto(url);
  11 |   }
  12 | 
  13 |   async clickRegisterLink() {
  14 |     await this.page.getByRole('link', { name: 'Register' }).click();
  15 |   }
  16 | 
  17 |   async fillRegistrationForm(user: any) {
  18 |     Logger.info('Filling Registration Form');
  19 | 
  20 |     await this.page.locator('[id="customer.firstName"]').fill(user.firstName);
  21 |     await this.page.locator('[id="customer.lastName"]').fill(user.lastName);
  22 |     await this.page.locator('[id="customer.address.street"]').fill(user.address);
  23 |     await this.page.locator('[id="customer.address.city"]').fill(user.city);
  24 |     await this.page.locator('[id="customer.address.state"]').fill(user.state);
  25 |     await this.page.locator('[id="customer.address.zipCode"]').fill(user.zipCode);
  26 |     await this.page.locator('[id="customer.phoneNumber"]').fill(user.phone);
  27 |     await this.page.locator('[id="customer.ssn"]').fill(user.ssn);
  28 |       await this.page.locator('[id="customer.username"]').waitFor({ state: 'visible' });
  29 |     await this.page.locator('[id="customer.username"]').fill(user.username);
  30 |     await this.page.locator('[id="customer.password"]').fill(user.password);
  31 |     await this.page.locator('#repeatedPassword').fill(user.password);
  32 |   }
  33 | 
  34 |   async submitRegistration(user: any) {
  35 |     Logger.info('Submitting Registration');
  36 | 
  37 |     await this.page.getByRole('button', { name: 'Register' }).click();
  38 | 
  39 |     await expect(this.page).toHaveURL(/register/);
> 40 |     await expect(this.page.locator('h1.title')).toHaveText(`Welcome ${user.username}`);
     |                                                 ^ Error: expect(locator).toHaveText(expected) failed
  41 |     await expect(this.page.locator('#rightPanel')).toContainText('Your account was created successfully');
  42 | 
  43 |     Logger.info('Registration Successful');
  44 |   }
  45 | 
  46 |   async clickRegisterButton() {
  47 |     await this.page.getByRole('button', { name: 'Register' }).click();
  48 |   }
  49 | 
  50 |   async registerUser(user: any) {
  51 |     await this.fillRegistrationForm(user);
  52 |     await this.submitRegistration(user);
  53 |   }
  54 | 
  55 |   async logout() {
  56 |     Logger.info('Logging Out');
  57 |     await this.page.locator('text=Log Out').click();
  58 |   }
  59 | 
  60 | }
```