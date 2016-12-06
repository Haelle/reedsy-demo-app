'use strict';

describe('bookList', function () {
    var booksData = [
        {name: "Book A"},
        {name: "Book B"},
        {name: "Book C"}
    ];

    beforeEach(module('bookList'));

    describe('BookListController', function () {
        var $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('books/book.json').respond(booksData);

            ctrl = $componentController('bookList');
        }));

        it('should create 3 books', function () {
            jasmine.addCustomEqualityTester(angular.equals);
            expect(ctrl.books).toEqual([]);
            $httpBackend.flush();
            expect(ctrl.books).toEqual(booksData);
        });

        it('should be ok', function () {
            expect(true).toBeTruthy();
        });

    });

});