const {LoginPage} = require('./LoginPage')
const {DashboardPage} = require('./DashboardPage');
const { CartPage } = require('./CartPage');
const {OrdersReviewPage} = require('./OrdersReviewPage')
const {OrdersHistoryPage} = require('./OrderHistoryPage');

class POManager
{
    constructor(page)  // Step 8.2: Control returns to POManager constructor. Step 9.2 POManager constructor finishes
    {
        this.page = page;  // step 2: Stores Playwright’s page object inside POManager
        this.loginPage = new LoginPage(this.page) // step 3: new LoginPage(this.page) is executed. JavaScript jumps into LoginPage constructor. Step 9.1: this.loginPage now holds a reference to the LoginPage object.
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;  // step 11: returns the reference(object) of Loginpage class 
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getOrdersReviewPage(){
        return this.ordersReviewPage;
    }

    getOrdersHistoryPage(){
        return this.ordersHistoryPage;
    }
}

module.exports = {POManager}