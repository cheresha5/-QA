//Тест-кейс проверяет, что можно зайти на сайт без регистрации
import { test, expect } from "@playwright/test";
import { BASE_URL, goToMainPage } from "../helpers/index";

test("Открытие сайта без регистрации", async ({ page }) => {
  await goToMainPage(page);
  await expect(page).toHaveURL(BASE_URL);
});