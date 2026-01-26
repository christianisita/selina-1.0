import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
	private usernameInput: Locator;
	private passwordInput: Locator;
	private loginButton: Locator;

	constructor(page: Page) {
		super(page);
		this.usernameInput = page.locator('#user-name');
		this.passwordInput = page.locator('#password');
		this.loginButton = page.locator('#login-button');
	}

	async open(): Promise<void> {
		await this.goto('https://www.saucedemo.com');
	}

	async login(username: string, password: string): Promise<void> {
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}
}
