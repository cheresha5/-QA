import { Page } from '@playwright/test';

export const BASE_URL = 'https://ryazan.cian.ru';

export async function goToMainPage(page: Page) {
  await page.goto(BASE_URL);
}
