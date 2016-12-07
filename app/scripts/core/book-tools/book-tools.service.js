// Non optimized methods should be REST services like book.service from multiple provided json
angular.module('core.bookTools').factory('BookTools', ['$http',
    function ($http) {
        var getCategories = function () {
            return $http.get('books/book.json').then(function (response) {
                var all = response.data;
                var categories = [];
                angular.forEach(all, function (item) {
                    categories.pushIfNotExist(item.genre.category, function (e) {
                        return e == item.genre.category;
                    });
                });
                
                return categories;
            });
        };

        var getGenres = function () {
            return $http.get('books/book.json').then(function (response) {
                var all = response.data;
                var categories = [];
                angular.forEach(all, function (item) {
                    categories.pushIfNotExist(item.genre.name, function (e) {
                        return e == item.genre.name;
                    });
                });

                return categories;
            });
        };

        var getBook = function (bookId) {
            return $http.get('books/book.json').then(function (response) {
                var all = response.data;
                var book = {};
                angular.forEach(all, function (item) {
                    if (item.id == bookId)
                        book = item;
                });
                
                return book;
            });
        };

        // this function sucks... should be a REST service
        var getSelectedBooks = function(bookId){
            return $http.get('books/book.json').then(function (response) {
                var books = response.data;

                // find the book
                var book = {};
                for (var i = 0; i < books.length; i++){
                    if (books[i].id == bookId) {
                        book = books[i];
                        break;
                    }
                }

                // init counter and resultset
                var selectedBooks = [];
                var count = 0;
                // find first 3 books with the same genre
                for (var j = 0; j < books.length; j++) {
                    if (books[j].genre.name == book.genre.name && books[j].id != book.id) {
                        selectedBooks.push(books[j]);
                        count++;
                    }

                    if (count == 3) break;
                }

                // if not 3 get the first 3
                if (count < 3) {
                    for (var k = 0; k < books.length; k++) {
                        var currBookId = books[k].id;
                        var inArray = selectedBooks.inArray(function(e){
                            return e.id == currBookId;
                        });

                        if (!inArray && books[k].id != book.id) {
                            selectedBooks.push(books[k]);
                            count++;
                        }

                        if (count == 3) break;
                    }
                }

                return selectedBooks;
            });
        };

        return {
            getCategories: getCategories,
            getGenres: getGenres,
            getBook: getBook,
            getSelectedBooks: getSelectedBooks
        }
    }
]);
