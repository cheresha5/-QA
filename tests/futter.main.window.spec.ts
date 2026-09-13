//Тест-кейс проверяет футтер главного экрана
import { test, expect } from "@playwright/test";
import { goToMainPage } from "../helpers/index";
import { footerLocators } from "../locators/footer.locators";

test("Футтер главного экрана", async ({ page }) => {
  await goToMainPage(page);
  await page.locator("footer").scrollIntoViewIfNeeded();

  const l = footerLocators(page);

  //  ССЫЛКИ ФУТЕРА 
  await expect(l.help).toBeVisible();
  await expect(l.superAgent).toBeVisible();
  await expect(l.mortgageCalculator).toBeVisible();
  await expect(l.investors).toBeVisible();
  await expect(l.legalDocuments).toBeVisible();
  await expect(l.price).toBeVisible();
  await expect(l.legalCheck).toBeVisible();
  await expect(l.searchOnMap).toBeVisible();
  await expect(l.advert).toBeVisible();
  await expect(l.sitemap).toBeVisible();
  await expect(l.auction).toBeVisible();
  await expect(l.promo).toBeVisible();
  await expect(l.svezhieObyavleniya).toBeVisible();
  await expect(l.tv).toBeVisible();
  await expect(l.contact).toBeVisible();
  await expect(l.career).toBeVisible();

  //  РАЙОНЫ 
  await expect(l.districtsTitle).toBeVisible();
  await expect(l.districtLinks).toHaveCount(4);
  await expect(l.districtLinks.first()).toBeVisible();

  //  ОПИСАНИЕ 
  await expect(l.description).toBeVisible();

  //  МОБИЛЬНЫЕ ССЫЛКИ 
  await expect(l.mobileVersion).toBeVisible();
  await expect(l.mobileApp).toBeVisible();

  //  КНОПКИ ПРИЛОЖЕНИЙ 
  await expect(l.googlePlay).toBeVisible();
  await expect(l.appStore).toBeVisible();
  await expect(l.ruStore).toBeVisible();
  await expect(l.appGallery).toBeVisible();

  //  ПРОЧЕЕ 
  await expect(l.container).toBeVisible();
  await expect(l.plus).toBeVisible();
});