const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    //this.user = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input');
    this.user = page.locator("//div[1]/div/div[2]/input[@name='username']");
    //this.pass = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input');
    this.pass = page.locator("//div[2]/div/div[2]/input[@name='password']");
    //this.loginButton = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button');
    this.loginButton = page.locator("//div/button[@type='submit']");
  }

  async submitLoginForm(user, pass) {
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.loginButton.click();
  }
};