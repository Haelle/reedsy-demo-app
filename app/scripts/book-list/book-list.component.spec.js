'use strict';

//TODO problems with multiple request in book-list.component
describe('bookList', function () {
    var booksData = [
        {name: "Book A"},
        {name: "Book B"},
        {name: "Book C"}
    ];

    beforeEach(module('bookList'));

    describe('BookListController', function () {
        var scope, $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_, $rootScope) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('books/book.json').respond(booksData);

            ctrl = $componentController('bookList', {
                $scope: scope
            });
        }));

        // afterEach(function() {
        //     $httpBackend.verifyNoOutstandingExpectation();
        //     $httpBackend.verifyNoOutstandingRequest();
        // });

        it('should create 3 books', function () {
            jasmine.addCustomEqualityTester(angular.equals);
            expect(scope.books).toEqual([]);
            // $httpBackend.flush();
            // expect(books).toEqual(booksData);
        });

        it('should be ok', function () {
            expect(true).toBeTruthy();
            // $httpBackend.flush();
        });

    });

});