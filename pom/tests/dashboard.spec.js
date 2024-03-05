import {test, expect } from '@playwright/test'
const { LoginPage } = require('../pages/login-pages');
const { DashboardPage } = require('../pages/dashboard-pages');

test('The user must seek to navigate through the menu options.', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm('Admin', 'admin123')
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToDashboard()
    //await page.pause()
})

test('The user must see the Quick Launch.', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm('Admin', 'admin123')
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyAllQuickLaunch()
    await page.pause()
})


