export class OrderConfirmationPage {
    private page: any;
  
    constructor(page: any) {
      this.page = page;
    }
  
    async waitForPageLoad() {
      await this.page.waitForSelector('[data-test="complete-header"]');
    }
  
    async isConfirmationMessageDisplayed() {
        return await this.page.getByRole('heading', { name: 'Thank you for your order!' }).isVisible()
    }
  
    async backToProducts() {
      await this.page.click('[data-test="back-to-products"]');
    }
  }
  