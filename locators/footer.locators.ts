import { type Page } from "@playwright/test";

export const footerLocators = (page: Page) => ({
  // ССЫЛКИ ФУТЕРА 
  help: page.getByTestId("LinkContainer-help"),
  superAgent: page.getByTestId("LinkContainer-super_agent"),
  mortgageCalculator: page.getByTestId("LinkContainer-mortgage-calculator"),
  investors: page.getByTestId("LinkContainer-investors"),
  legalDocuments: page.getByTestId("LinkContainer-legal-documents"),
  price: page.getByTestId("LinkContainer-price"),
  legalCheck: page.getByTestId("LinkContainer-legal-check"),
  searchOnMap: page.getByTestId("LinkContainer-search_on_map"),
  advert: page.getByTestId("LinkContainer-advert"),
  sitemap: page.getByTestId("LinkContainer-sitemap"),
  auction: page.getByTestId("LinkContainer-auction"),
  promo: page.getByTestId("LinkContainer-promo"),
  svezhieObyavleniya: page.getByTestId("LinkContainer-svezhie-obyavleniya"),
  tv: page.getByTestId("LinkContainer-tv"),
  contact: page.getByTestId("ContactsLink-contact"),
  career: page.getByTestId("LinkContainer-career"),

  //  РАЙОНЫ
  districtsTitle: page.getByText("Квартиры в районе"),
  districtLinks: page.locator(".x174413b8--e33ea2--c-geo-link"),

  //ОПИСАНИЕ 
  description: page.getByText("Циан — база проверенных объявлений").first(),

  //  МОБИЛЬНЫЕ ССЫЛКИ
  mobileVersion: page.getByTestId("LinkToMobileVersion").first(),
  mobileApp: page.getByTestId("LinkToMobileApp").first(),

  // КНОПКИ ПРИЛОЖЕНИЙ 
  googlePlay: page.locator(".xe30f6088--_584fc--google-btn").first(),
  appStore: page.locator(".xe30f6088--_584fc--apple-btn").first(),
  ruStore: page.locator(".xe30f6088--_584fc--ru-store-btn").first(),
  appGallery: page.locator(".xe30f6088--_584fc--app-gallery-btn").first(),

  //  ПРОЧЕЕ 
  plus: page.getByText("+").nth(1),
  container: page.locator(".xe30f6088--_715d6--container").first(),
});