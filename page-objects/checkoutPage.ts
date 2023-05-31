export class CheckoutPage {
    private page: any;
  
    constructor(page: any) {
      this.page = page;
    }
  
    async waitForPageLoad() {
      await this.page.waitForSelector('[data-test="checkout_info_container"]');
    }
  
    async fillForm(firstName: string, lastName: string, postalCode: string) {
      await this.page.fill('[data-test="firstName"]', firstName);
      await this.page.fill('[data-test="lastName"]', lastName);
      await this.page.fill('[data-test="postalCode"]', postalCode);
      await this.page.click('[data-test="continue"]');
      await this.page.locator('[data-test="finish"]').click();
    }
  
    async checkout() {
     
      await this.page.locator('[data-test="checkout"]').click();

    }
  }
  