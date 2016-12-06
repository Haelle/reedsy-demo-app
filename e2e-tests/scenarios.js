'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Reedsy Application', function () {

    it('should redirect `index.dev.html` to `index.dev.html#!/books', function () {
        browser.get('index.dev.html');
        expect(browser.getLocationAbsUrl()).toBe('/books');
    });
});