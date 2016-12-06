'use strict';

angular.module('bookList').filter('filterBooks', function () {
    return function (books, searchValue) {
        var filtered = [];
        if (searchValue) {
            searchValue = searchValue.toUpperCase();
            angular.forEach(books, function (el) {
                if (
                    (el.name && el.name.toUpperCase().indexOf(searchValue) > -1) ||
                    (el.author.name && el.author.name.toUpperCase().indexOf(searchValue) > -1)
                ) {
                    filtered.push(el);
                }
            });

            return filtered;
        }
        else {
            return books;
        }
    };
});
