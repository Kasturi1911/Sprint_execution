# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end2end.spec.ts >> Parabank UI + API E2E Flow @e2e @regression >> Create Account Using UI And Validate Using API
- Location: tests\end2end.spec.ts:22:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Accounts Overview' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Accounts Overview' })

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
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Error!" [level=1]
- paragraph: The username and password could not be verified.
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
  2  | 
  3  | import { Logger } from '../Utils/logger';
  4  | 
  5  | export class LoginPage {
  6  | 
  7  |   constructor(private page: Page) {}
  8  | 
  9  |   async login(username: string, password: string) {
  10 | 
  11 |     Logger.info('Entering Login Credentials');
  12 | 
  13 |     await this.page.locator('input[name="username"]')
  14 |       .fill(username);
  15 | 
  16 |     await this.page.locator('input[name="password"]')
  17 |       .fill(password);
  18 | 
  19 |     Logger.info('Clicking Login Button');
  20 | 
  21 |     await this.page.locator('input[value="Log In"]')
  22 |       .click();
  23 | 
  24 |     // Validate successful login
  25 |     await expect(
  26 |       this.page.getByRole('heading', {
  27 |         name: 'Accounts Overview'
  28 |       })
> 29 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  30 | 
  31 |     Logger.info('Login Successful');
  32 |   }
  33 | 
  34 |   async attemptLogin(username: string, password: string) {
  35 |   Logger.info(`Attempting login with username: ${username}`);
  36 |   await this.page.locator('input[name="username"]').fill(username);
  37 |   await this.page.locator('input[name="password"]').fill(password);
  38 |   await this.page.locator('input[value="Log In"]').click();
  39 | }
  40 | }
```