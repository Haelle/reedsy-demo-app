'use strict';

angular.module('reedsyApp').config(['$locationProvider', '$routeProvider','$translateProvider',
    function config($locationProvider, $routeProvider, $translateProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/books', {
            template: '<book-list></book-list>'
        }).when('/books/:bookId', {
            template: '<book-detail></book-detail>'
        }).otherwise('/books');

        $translateProvider.translations('en', {
            'by': 'By ',
            'days': 'days',
            'months': 'months',
            'ago-start': '',
            'ago-end': 'ago',
            'filter.category': 'Find me the best',
            'filter.genre': 'book about'
        });

        $translateProvider.translations('fr', {
            'by': 'Par ',
            'days': 'jours',
            'months': 'mois',
            'ago-start': 'Il y a ',
            'ago-end': '',
            'filter.category': 'Trouve moi le meilleurs',
            'filter.genre': 'livre de'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }
]);
