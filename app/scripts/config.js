angular.module('reedsyApp').config(['$locationProvider', '$routeProvider','$translateProvider',
    function config($locationProvider, $routeProvider, $translateProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/books', {
            template: '<book-list></book-list>'
        }).when('/books/:bookId', {
            template: '<book-detail></book-detail><book-advices></book-advices>'
        }).otherwise('/books');

        $translateProvider.translations('en', {
            'by': 'By ',
            'days': 'days',
            'months': 'months',
            'ago-start': '',
            'ago-end': 'ago',
            'filter.category': 'Find me the best',
            'filter.genre': 'Book about',
            'detail.back': 'Back to list',
            'detail.categories': 'Categories',
            'detail.introduction': 'Introduction',
            'search.placeholder': 'search a book',
            'writtenby': 'Written by ',
            'similarreadings.title': 'Similar readings',
            'similarreadings.content': "If you'd liked this book, we recommend you check out these emerging titles"
        });

        $translateProvider.translations('fr', {
            'by': 'Par ',
            'days': 'jours',
            'months': 'mois',
            'ago-start': 'Il y a ',
            'ago-end': '',
            'filter.category': 'Trouve moi le meilleurs',
            'filter.genre': 'livre de',
            'detail.back': 'Retour à la liste',
            'detail.categories': 'Catégories',
            'detail.introduction': 'Introduction',
            'search.placeholder': 'trouver un livre',
            'writtenby': 'Ecrit par ',
            'similarreadings.title': 'Lectures similaires',
            'similarreadings.content': 'Si vous avez aimez ce livre, nous vous recommandons de regarder ces titres'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }
]);
