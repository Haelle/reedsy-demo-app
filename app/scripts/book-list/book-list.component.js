'use strict';

angular.module('bookList').component('bookList', {
    templateUrl: 'scripts/book-list/book-list.template.html',
    controller: ['$scope', 'Book', 'BookTools',
        function BookListController($scope, Book, BookTools) {
            this.now = new Date();
            $scope.books = Book.query();
            $scope.currentPage = 1;
            $scope.pageSize = 20;

            $scope.categories = [];
            BookTools.getCategories().then(function(data){
               $scope.categories = data;
            });
            
            $scope.genres = [];
            BookTools.getGenres().then(function(data){
                $scope.genres = data;
            });
        }
    ]
});