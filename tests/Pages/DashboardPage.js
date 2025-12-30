class DashboardPage
{
constructor(page)
{
    this.page = page;
    this.products = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");

}

async searchProductAddCart(productName) {
    // Wait until product titles are visible
    await this.productsText.first().waitFor({ state: 'visible' });
    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
        const title = await this.products.nth(i).locator("b").textContent();
        if (title.trim() === productName) {
            // Wait until Add To Cart button is visible & enabled
            const addToCartBtn = this.products.nth(i).locator("text=Add To Cart");
            await addToCartBtn.click();
            await this.page.waitForTimeout(3000)
            break;
        }
    }
}

async navigateToOrders()
{
    await this.orders.click();
}

async navigateToCart()
{
    await this.cart.click();
}

}
module.exports = {DashboardPage};