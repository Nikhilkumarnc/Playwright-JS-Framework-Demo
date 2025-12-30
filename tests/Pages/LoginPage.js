class LoginPage 
{
    constructor(page)   // Step 8.1: LoginPage constructor finishes.
    {
        this.page = page; // step 4: LoginPage now has access to Playwright page. 
        this.userNameInput = this.page.locator('input[formcontrolname="userEmail"]'); // step 5: this.userNameInput locator is created
        this.passwordInput = this.page.locator('input[formcontrolname="userPassword"]') // step 6: this.passwordInput locator is created
        this.loginBtn = this.page.locator('#login') // step 7: this.loginBtn locator is created
    } 

    async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client', {waitUntil: 'domcontentloaded'});
    }

    async validateLogin(username, password)
    {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}

module.exports = {LoginPage}