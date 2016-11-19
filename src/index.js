const Nightmare = require('nightmare');

export default {
    // reference to Nightmare instance
    nightmare: null,

    // map with open page references
    openedPages: {},

    // multiple browsers support
    isMultiBrowser: false,

    // open new page in browser
    async openBrowser (id, pageUrl) {
        const page = await this.nightmare.goto(pageUrl);

        this.openedPages[id] = page;
    },

    // close given page in browser
    async closeBrowser (id) {
        const page = this.openedPages[id];

        delete this.openedPages[id];
        await page.end();
    },

    // init browser
    async init () {
        this.nightmare = Nightmare({
            show:         true,
            openDevTools: true,
        });
    },

    async dispose () {
        return;
    },

    // resize browser window to given size
    async resizeWindow (id, width, height) {
        const page = this.openedPages[id];

        await page.viewport(width, height);
    },

    // take screenshot of given page in browser
    async takeScreenshot (id, screenshotPath) {
        const page = this.openedPages[id];

        await page.screenshot(screenshotPath);
    }
};
