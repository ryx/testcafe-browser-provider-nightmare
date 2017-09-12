/**
 * Testcafe browser provider plugin for the nightmare browser automation library.
 */
import Nightmare from 'nightmare';
import Debug from 'debug';

// add debug namespace
const debug = Debug('testcafe-browser-provider-nightmare');

export default {
    // map with open page references
    nightmareInstances: {},

    // multiple browsers support
    isMultiBrowser: false,

    // open new page in browser
    async openBrowser (id, pageUrl) {
        const conf = {
            show:         debug.enabled,
            openDevTools: debug.enabled,
        };

        this.nightmareInstances[id] = Nightmare(conf);

        await this.nightmareInstances[id].goto(pageUrl);
    },

    // close given page in browser
    async closeBrowser (id) {
        const nightmare = this.nightmareInstances[id];

        delete this.nightmareInstances[id];

        await nightmare.end();
    },

    // resize browser window to given size
    async resizeWindow (id, width, height) {
        await this.nightmareInstances[id].viewport(width, height);
    },

    // take screenshot of given page in browser
    async takeScreenshot (id, screenshotPath) {
        await this.nightmareInstances[id].screenshot(screenshotPath);
    }
};
