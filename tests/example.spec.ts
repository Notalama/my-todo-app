import { test, expect } from 'playwright/test';

test('basic test: navigates to localhost:4200 and verifies title', async ({ page }) => {
  // Navigate to the Playwright homepage
  await page.goto('http://localhost:4200'); 

  // Expect the title to contain "MyTodoApp"
  await expect(page).toHaveTitle(/MyTodoApp/); 
});
