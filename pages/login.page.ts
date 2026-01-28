import { Page, Locator } from '@playwright/test';
import BasePage from './base.page';
import LoginSelector from '../selectors/login.selector';

export default class LoginPage extends BasePage {
	readonly loginSelector: LoginSelector

	constructor(page: Page) {
		super(page);
		this.loginSelector = new LoginSelector(page);
	}

	async goToLoginPage(): Promise<void> {
		await this.goto('/');
	}

	async login(username: string, password: string): Promise<void> {
		await this.loginSelector.usernameInput.fill(username);
		await this.loginSelector.passwordInput.fill(password);
		await this.loginSelector.loginButton.click();
	}
}
