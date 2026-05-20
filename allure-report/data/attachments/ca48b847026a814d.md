# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: negative.spec.ts >> Parabank Negative UI Scenarios >> Registration Negative Scenarios >> Empty Registration Form Validation
- Location: tests\negative.spec.ts:48:5

# Error details

```
TypeError: registerPage.verifyEmptyFormErrors is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: First name is required." [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell [ref=e52]:
                - textbox [ref=e53]
              - cell "First name is required." [ref=e54]
            - 'row "Last Name: Last name is required." [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell [ref=e57]:
                - textbox [ref=e58]
              - cell "Last name is required." [ref=e59]
            - 'row "Address: Address is required." [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell [ref=e62]:
                - textbox [ref=e63]
              - cell "Address is required." [ref=e64]
            - 'row "City: City is required." [ref=e65]':
              - cell "City:" [ref=e66]
              - cell [ref=e67]:
                - textbox [ref=e68]
              - cell "City is required." [ref=e69]
            - 'row "State: State is required." [ref=e70]':
              - cell "State:" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell "State is required." [ref=e74]
            - 'row "Zip Code: Zip Code is required." [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell [ref=e77]:
                - textbox [ref=e78]
              - cell "Zip Code is required." [ref=e79]
            - 'row "Phone #:" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell [ref=e82]:
                - textbox [ref=e83]
              - cell [ref=e84]
            - 'row "SSN: Social Security Number is required." [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell [ref=e87]:
                - textbox [ref=e88]
              - cell "Social Security Number is required." [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: Username is required." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell "Username is required." [ref=e96]
            - 'row "Password: Password is required." [ref=e97]':
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell "Password is required." [ref=e101]
            - 'row "Confirm: Password confirmation is required." [ref=e102]':
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell "Password confirmation is required." [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { mergeTests } from '@playwright/test';
  2  | import { test as apiTest } from '../Fixtures/apiFixture';
  3  | import { test as uiTest } from '../Fixtures/uiFixture';
  4  | import { JsonReader } from '../Utils/jsonReader';
  5  | 
  6  | const test = mergeTests(apiTest, uiTest);
  7  | 
  8  | const negativeData = JsonReader.readJson('TestData/negativeData.json');
  9  | 
  10 | test.describe('Parabank Negative UI Scenarios', () => {
  11 | 
  12 |   test.beforeEach(async ({ registerPage, data }) => {
  13 |     await registerPage.openApplication(data.url);
  14 |   });
  15 | 
  16 |   // ─────────────────────────────────────────────
  17 |   // Login Negative Scenarios
  18 |   // ─────────────────────────────────────────────
  19 |   test.describe('Login Negative Scenarios', () => {
  20 | 
  21 |     test('Invalid Username and Password', async ({ loginPage }) => {
  22 |       const { username, password } = negativeData.invalidLogin;
  23 |       await loginPage.attemptLogin(username, password);
  24 |       await loginPage.verifyInvalidCredentialsError();
  25 |     });
  26 | 
  27 |     test('Empty Username Validation', async ({ loginPage }) => {
  28 |       await loginPage.attemptLogin('', negativeData.emptyUsername.password);
  29 |       await loginPage.verifyEmptyCredentialsError();
  30 |     });
  31 | 
  32 |     test('Empty Password Validation', async ({ loginPage }) => {
  33 |       await loginPage.attemptLogin(negativeData.emptyPassword.username, '');
  34 |       await loginPage.verifyEmptyCredentialsError();
  35 |     });
  36 | 
  37 |   });
  38 | 
  39 |   // ─────────────────────────────────────────────
  40 |   // Registration Negative Scenarios
  41 |   // ─────────────────────────────────────────────
  42 |   test.describe('Registration Negative Scenarios', () => {
  43 | 
  44 |     test.beforeEach(async ({ registerPage }) => {
  45 |       await registerPage.clickRegisterLink();
  46 |     });
  47 | 
  48 |     test('Empty Registration Form Validation', async ({ registerPage }) => {
  49 |       await registerPage.clickRegisterButton();
> 50 |       await registerPage.verifyEmptyFormErrors();
     |                          ^ TypeError: registerPage.verifyEmptyFormErrors is not a function
  51 |     });
  52 | 
  53 |     test('Password Mismatch Validation', async ({ registerPage }) => {
  54 |       const { user, password, confirmPassword } = negativeData.passwordMismatch;
  55 |       await registerPage.fillRegistrationForm({ ...user, username: `user${Date.now()}`, password });
  56 |       await registerPage.fillConfirmPassword(confirmPassword);
  57 |       await registerPage.clickRegisterButton();
  58 |       await registerPage.verifyPasswordMismatchError();
  59 |     });
  60 | 
  61 |   });
  62 | 
  63 | });
```