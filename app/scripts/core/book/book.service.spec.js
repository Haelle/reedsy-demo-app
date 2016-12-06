'use strict';

describe('Book', function() {
    var $httpBackend;
    var Book;
    var booksData = [
        {name: 'Book A'},
        {name: 'Book B'},
        {name: 'Book C'}
    ];

    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('core.book'));

    beforeEach(inject(function(_$httpBackend_, _Book_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('books/book.json').respond(booksData);

        Book = _Book_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the books data from `/books/book.json`', function() {
        var books = Book.query();

        expect(books).toEqual([]);

        $httpBackend.flush();
        expect(books).toEqual(booksData);
    });

});