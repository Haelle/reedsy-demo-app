'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Reedsy Application', function () {

    it('should redirect `index.dev.html` to `index.dev.html#!/books', function () {
        browser.get('index.dev.html');
        expect(browser.getLocationAbsUrl()).toBe('/books');
    });

    describe('View Book list', function(){
        beforeEach(function() {
            browser.get('index.dev.html#!/phones');
        });

        it('should filter the book list with genre', function() {
            var queryField = element(by.model('userSearch'));
            var genreSelect = element(by.model('bookGenre'));
            var cookbooksOption = genreSelect.element(by.css('option[value="Cookbooks"]'));
            var bookNameColumn = element.all(by.repeater('book in $ctrl.books').column('book.name'));

            function getNames(){
                return bookNameColumn.map(function(elem) {
                    return elem.getText();
                });
            }

            queryField.sendKeys('camus');
            
            expect(getNames()).toEqual(['The Stranger']);

            cookbooksOption.click();

            expect(getNames()).toEqual(['The Stranger']);
        });
    });
});