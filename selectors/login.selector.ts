import { Page, Locator } from "@playwright/test";
import BaseSelector from "./base.selector";

export default class LoginSelector extends BaseSelector{
    protected page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    get usernameInput(): Locator {
        return this.page.getByTestId("username");
    }

    get passwordInput(): Locator {
        return this.page.getByTestId("password");
    }

    get loginButton(): Locator {
        return this.page.getByTestId("login-button");
    }
}