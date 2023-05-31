import { expect } from "@playwright/test";

export class ShoppingPage {
    private page: any;

    constructor(page: any) {
        this.page = page;
    }

/*     async waitForPageLoad() {
        await this.page.waitForSelector('[data-test="product_sort_container"]');
        await expect(this.page.getByText('Products').isVisible());

    } */

    async checkPageDisplay() {

        await this.page.waitForSelector('[data-test="product_sort_container"]');
        //await expect(this.page.getByText('Products').isVisible());
        await expect(this.page).toHaveScreenshot("shopping.png");
    }

    async addToCart(itemName: string) {
        await this.page.click(`[data-test="add-to-cart-${itemName.toLowerCase().replace(/ /g, '-')}"]`);
    }

    async openCart() {
        //await this.page.click('[data-test="shopping-cart-button"]');
        await this.page.locator('a').filter({ hasText: '2' }).click();
    }

    async openMenu() {

        await this.page.getByRole('button', { name: 'Open Menu' }).click();

    }

    async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }
}
