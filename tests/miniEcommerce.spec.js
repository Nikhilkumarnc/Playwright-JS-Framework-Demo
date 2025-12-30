const {test, expect} = require('@playwright/test')
const { POManager } = require('./Pages/POManager')
const dataset = JSON.parse(JSON.stringify(require('./utils/miniEcommerceTestData.json')))

// test.describe.configure({mode:'parallel'})

for(const data of dataset){

test(`Mini Ecommerce for ${data.productName}`, async({page})=>{  // Step 9.3 Control returns to the test file
   
    const poManager = new POManager(page);  // step 1: new POManager(page) is executed. JavaScript jumps into POManager constructor. Step 9: Execution returns to the caller after constructor finishes.
    
    const loginPage = poManager.getLoginPage();  // Step 10: getLoginPage() is called. Step 11: The same LoginPage object reference is returned. Step 12: loginPage now references the same object as this.loginPage inside POManager.
    console.log(poManager.loginPage === loginPage); // true
    await loginPage.goTo(); // Step 13: goTo() runs on LoginPage object. Uses this.page.goto(...)
    await loginPage.validateLogin(data.username, data.password); // Step 14: Uses stored locators, Fills username, Fills password, Clicks login button

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();  

    const cartPage = poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(data.productName);
    await cartPage.checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect('Ind', 'India');
    // await ordersReviewPage.verifyUserEmail('nikhilkumar.temp@gmail.com')

   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

    // await page.pause();
})
}

test('@sanity Another site to test parlalle', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
})

