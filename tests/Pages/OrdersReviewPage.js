const { expect } = require("@playwright/test");

class OrdersReviewPage {
    constructor(page){
        this.page = page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.dropdownValues = page.locator(".ta-results");
        this.emailIdInput = page.locator(".user__name [type='text']").first();
        this.submitBtn =  page.locator(".action__submit");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
        this.userEmailInput = page.locator('.user__name .ng-valid');
    }

    async searchCountryAndSelect(countryCode, countryName){
        await this.countryInput.pressSequentially(countryCode, { delay: 100 });
        await this.dropdownValues.first().waitFor({state:'visible'});
        const optionsCount = await this.dropdownValues.locator('button').count();
        for(let i = 0; i < optionsCount; i++){
            const receivedCountry = await this.dropdownValues.locator('button').nth(i).textContent();
            if(receivedCountry.trim() === countryName){
                await this.dropdownValues.locator('button').nth(i).click();
                break;  
            }
        }
    }

    async verifyUserEmail(userEmail){
        expect(this.userEmailInput.inputValue() === userEmail).toBeTruthy();
    }

    async SubmitAndGetOrderId()
    {
        await this.submitBtn.click();
        await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
        return await this.orderId.textContent();
    }
}

module.exports = {OrdersReviewPage}