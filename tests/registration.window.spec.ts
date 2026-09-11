//Тест-кейс проверяет окно регистрации
import { test, expect } from "@playwright/test";
import { goToMainPage } from "../helpers/index";
import { LoginPage } from "../pages/login.page";

test("Регистрация", async ({ page }) => {
  await goToMainPage(page);

  const loginPage = new LoginPage(page);
  await loginPage.openLoginModal();

  await expect(loginPage.modalTitle).toBeVisible();
  await expect(loginPage.phoneInput).toBeVisible();
  await expect(loginPage.getCodeButton).toBeVisible();
  await expect(loginPage.anotherWayButton).toBeVisible();
  await expect(loginPage.supportLink).toBeVisible();
  await expect(loginPage.closeButton).toBeVisible();
});

