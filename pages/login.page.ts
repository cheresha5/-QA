import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly modalTitle: Locator;
  readonly phoneInput: Locator;
  readonly getCodeButton: Locator;
  readonly anotherWayButton: Locator;
  readonly supportLink: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('[data-name="LoginButton"]').first();
    this.modalTitle = page.getByRole("heading", { name: "Вход или регистрация" });
    this.phoneInput = page.getByRole("textbox", { name: "Телефон" });
    this.getCodeButton = page.getByRole("button", { name: "Получить код" });
    this.anotherWayButton = page.getByRole("button", { name: "Другой способ" });
    this.supportLink = page.getByRole("link", { name: "Служба поддержки" });
    this.closeButton = page.getByLabel("Закрыть");
  }

  async openLoginModal(): Promise<void> {
    await this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.click();
  }
}