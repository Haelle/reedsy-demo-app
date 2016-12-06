angular.module('core.bookTools').factory('BookTools', ['$http',
    function ($http) {
        var getCategories = function () {
            return $http.get('books/book.json').then(function (response) {
                var all = response.data;
                var categories = [];
                angular.forEach(all, function (item) {
                    categories.pushIfNotExist(item.genre.category, function(e){
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
                    categories.pushIfNotExist(item.genre.name, function(e){
                        return e == item.genre.name;
                    });
                });

                return categories;
            });
        };

        return {
            getCategories: getCategories,
            getGenres: getGenres
        }
    }
]);
