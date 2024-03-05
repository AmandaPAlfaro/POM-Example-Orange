const { expect } = require('@playwright/test');
const { assert } = require('console');

exports.DashboardPage = class DashboardPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.adminMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a');
        this.pimMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a');
        this.leaveMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a/span');
        this.timeMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a/span');
        this.recruitmentMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a/span'); 
        this.myInfoMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span'); 
        this.performanceMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[7]/a/span'); 
        this.dashboardMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[8]/a/span'); 
        this.directoryMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[9]/a/span'); 
        this.assignLeaveQuickLunch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/div/div[1]/div");
        this.leaveListQuickLunch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/div/div[2]/div");
        this.timesheetsQuickLunch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/div/div[3]/div");
        this.applyLeaveQuickLunch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/div/div[4]/div/p");
        this.myLeaveQuickLunch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/div/div[5]/div");
        this.myTimesheetQuickLunch = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/div/div[6]/div");
    
        
    }

    async navigateToDashboard() {
        await this.adminMenu.click();
        await this.pimMenu.click();
        await this.leaveMenu.click();
        await this.timeMenu.click();
        await this.recruitmentMenu.click();
        await this.myInfoMenu.click();
        await this.performanceMenu.click();
        await this.dashboardMenu.click();
        await this.directoryMenu.click();
    }

    async verifyAllQuickLaunch() {
        await this.dashboardMenu.click();
        expect(this.assignLeaveQuickLunch).toContainText("Assign Leave")
        expect(this.leaveListQuickLunch).toContainText("Leave List")
        expect(this.timesheetsQuickLunch).toContainText("Timesheets")
        expect(this.applyLeaveQuickLunch).toContainText("Apply Leave")
        expect(this.myLeaveQuickLunch).toContainText("My Leave")
        expect(this.myTimesheetQuickLunch).toContainText("My Timesheet")  
    }
};