import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test.describe('Login', () => {
	test('user can login with valid credentials', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.goToLoginPage();
		await loginPage.login('standard_user', 'secret_sauce');
		// assert user lands on inventory page
		await loginPage.waitForUrl('inventory.html');
		const title = await loginPage.title();
		expect(title).toBeTruthy();
	});
});
