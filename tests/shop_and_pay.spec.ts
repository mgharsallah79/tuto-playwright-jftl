import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { ShoppingPage } from "../page-objects/shoppingPage";
import { CheckoutPage } from "../page-objects/checkoutPage";
import { OrderConfirmationPage } from "../page-objects/orderConfirmationPage";
import testData from "../test-data/testData.json";

test.describe("Shopping Workflow", () => {
  let page: any;
  let loginPage: LoginPage;
  let shoppingPage: ShoppingPage;
  let checkoutPage: CheckoutPage;
  let orderConfirmationPage: OrderConfirmationPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    shoppingPage = new ShoppingPage(page);
    checkoutPage = new CheckoutPage(page);
    orderConfirmationPage = new OrderConfirmationPage(page);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test("should add items to cart and complete checkout", async () => {
    await loginPage.navigateTo();
    // await loginPage.blockPageImages();
    await loginPage.login(process.env.USER_NAME!, process.env.USER_PASSWORD!);

    // await shoppingPage.checkPageDisplay()
    await shoppingPage.addToCart(testData.productNames.backpack);
    await shoppingPage.addToCart(testData.productNames.tshirt);
    await shoppingPage.openCart();

    await checkoutPage.checkout();
    await checkoutPage.fillForm(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      testData.checkoutInfo.postalCode
    );
    await expect(
      orderConfirmationPage.isConfirmationMessageDisplayed()
    ).toBeTruthy();

    await orderConfirmationPage.backToProducts();

    await shoppingPage.openMenu();
    await shoppingPage.logout();
  });
});
