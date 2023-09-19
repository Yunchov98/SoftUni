const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;
const url = 'http://127.0.0.1:5500/01.%20Accordion/index.html';

describe('E2E tests', function () {
    this.timeout(5000);

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 500 });
    });

    after(async () => {
        browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it('load static page', async () => {
        await page.goto(url);

        const content = await page.textContent('.accordion .head span');
        expect(content).to.be.equal('Scalable Vector Graphics');
    });

    it('show details', async () => {
        await page.goto(url);

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');

        const isVisible = await page.isVisible('#main>.accordion:first-child >> .extra p');

        expect(isVisible).to.be.true;
    });

    it('show less', async () => {
        await page.goto(url);

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        await page.click('#main>.accordion:first-child >> text=Less');

        const isVisible = await page.isVisible('#main>.accordion:first-child >> .extra p');

        expect(isVisible).to.be.false;
    });
});