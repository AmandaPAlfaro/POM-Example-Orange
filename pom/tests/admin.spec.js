import {test, expect } from '@playwright/test'
const { LoginPage } = require('../pages/login-pages');
const { AdminPage } = require('../pages/admin-page');

test('The user must find an administrator.', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm('Admin', 'admin123')
    const adminPage = new AdminPage(page);
    await adminPage.searchNameAdmin('Admin')
    await page.pause()
})