import {test, expect } from '@playwright/test'
const { LoginPage } = require('../pages/login-pages');
const { DashboardPage } = require('../pages/dashboard-pages');

test('User must be logged in successfully.', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm('Admin', 'admin123')
})