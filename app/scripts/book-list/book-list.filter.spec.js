'use strict';

describe('filterBooks', function() {
    var books = [
        {name: "AAA", author:{name:"Alpha"}},
        {name: "AaA", author:{name:"Alpha"}},
        {name: "AAAAA", author:{name:"Beta"}},
        {name: "BBb", author:{name:"Alpha"}}
    ];

    beforeEach(module('bookList'));

    it('should filter search results by author name or title',
        inject(function(filterBooksFilter) {
            expect(filterBooksFilter(books, "aaa").length).toBe(3);
            expect(filterBooksFilter(books, "Alpha").length).toBe(3);
            expect(filterBooksFilter(books, "AAA").length).toBe(3);
            expect(filterBooksFilter(books, "Beta").length).toBe(1);
        })
    );

});
