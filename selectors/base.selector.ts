import { selectors, Page, Locator } from '@playwright/test';

export default class BaseSelector {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}
