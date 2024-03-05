const { expect } = require('@playwright/test');

exports.AdminPage = class AdminPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page; 
        this.adminMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a');
        this.userNameSearch = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]');
        this.buttonSearch = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    }

    async searchNameAdmin(userNameSearch) {
        await this.adminMenu.click();
        await this.userNameSearch.fill(userNameSearch);
        await this.buttonSearch.click();
    }
  };