const { expect } = require('@playwright/test');

exports.AdminPage = class AdminPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page; 
        //this.adminMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a');
        this.adminMenu = page.locator("//ul/li[1]/a[@class='oxd-main-menu-item']");
        //this.userNameSearch = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
        this.userNameSearch = page.locator("//div[2]/input[@class='oxd-input oxd-input--active']");
        this.buttonSearch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]");
        //this.buttonSearch = page.locator("//div[@class='oxd-form-actions']/button[2]");
        this.adminUserVerify = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div');
    }

    async searchNameAdmin(userNameSearch1) {
        await this.adminMenu.click();
        await this.userNameSearch.fill(userNameSearch1);
        await this.buttonSearch.click({timeout: 5000});

        expect(this.adminUserVerify).toContainText("Admin")
    }
  };