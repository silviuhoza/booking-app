import {$routeProvider, $locationProvider} from 'angular-route';

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/test', {
            templateUrl: 'Pages/Test.html'
        })
        .when('/people', {
            templateUrl: 'Pages/People.html'
        })
        .when('/person/:id', {
            templateUrl: 'Pages/PersonDetails.html'
        })
        .when('/about', {
            templateUrl: 'Pages/About.html'
        })
        .when('/contact', {
            templateUrl: 'pages/Contact.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}

export default appConfig;
