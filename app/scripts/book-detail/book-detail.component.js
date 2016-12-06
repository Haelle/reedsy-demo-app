'use strict';

angular.module('bookDetail').component('bookDetail', {
    templateUrl: 'scripts/book-detail/book-detail.template.html',
    controller: ['$scope','$routeParams', 'BookTools',
        function BookDetailController($scope, $routeParams, BookTools) {
            $scope.book = {};
            BookTools.getBook($routeParams.bookId).then(function(book) {
                $scope.book = book;
            })
        }
    ]
});