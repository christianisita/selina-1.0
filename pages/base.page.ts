import { Page } from '@playwright/test';

export default class BasePage {
	protected page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto(url: string): Promise<void> {
		await this.page.goto(url);
	}

	async waitForUrl(urlPart: string, options?: { timeout?: number }): Promise<void> {
		const re = new RegExp(urlPart);
		await this.page.waitForURL(re, options);
	}

	async title(): Promise<string> {
		return this.page.title();
	}
}
