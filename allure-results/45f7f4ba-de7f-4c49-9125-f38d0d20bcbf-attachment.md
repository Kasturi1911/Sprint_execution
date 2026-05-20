# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: negative.spec.ts >> Parabank Negative UI Scenarios >> Login Negative Scenarios >> Empty Username Validation
- Location: tests\negative.spec.ts:22:1

# Error details

```
Error: locator.clear: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Username')

```

```
Error: browserContext.close: Target page, context or browser has been closed
```