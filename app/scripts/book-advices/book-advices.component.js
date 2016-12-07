angular.module('bookAdvices').component('bookAdvices', {
    templateUrl: 'scripts/book-advices/book-advices.template.html',
    controller: ['$scope', '$routeParams', 'BookTools',
        function BookAdvicesController($scope, $routeParams, BookTools) {
            $scope.selectedBooks = {};
            BookTools.getSelectedBooks($routeParams.bookId).then(function(books) {
                $scope.selectedBooks = books;
            });
        }
    ]
});