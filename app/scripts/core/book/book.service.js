angular.module('core.book').factory('Book', ['$resource',
    function ($resource) {
        return $resource('books/:bookId.json', {}, {
            query: {
                method: 'GET',
                params: {bookId: 'book'},
                isArray: true
            }
        });
    }
]);
